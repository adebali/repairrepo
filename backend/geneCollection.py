import argparse, pymongo, csv
from pymongo import MongoClient

#connect to MongoDB
connection = MongoClient('mongodb://yasgari:701415@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/data?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
#connection = MongoClient("mongodb+srv://mongodb-stitch-dataretrieval-vwdtg:<PASSWORD>@sancarlabdb-v0rht.mongodb.net/test?retryWrites=true")
db = connection.data

#create argparser
parser = argparse.ArgumentParser(description="Push or Empty Gene collection")
parser.add_argument('--action', required = True, help = 'command push or empty')
args = parser.parse_args()


#handle args
if(args.action == "empty" or args.action == 'Empty'):

    db['gene'].remove({})
    print('emptied gene collection')
    
elif (args.action == "push" or args.action == "Push"):
    txtfile = open('sample.txt', 'r') #txt file containing sample data
    reader = csv.DictReader(txtfile, delimiter = '\t')

    i = 0
    for row in reader:
        for key, value in row.items():
            #cast decimals to float instead of keeping it a string
            try:
                row[key] = float(value)
            except ValueError:
                #print('value cant be cast: not a float')
                row[key] = value

        row["organism"] = "mouse"
        data = dict(row)
        #print('data',data)
        db['gene'].insert(data)

    print('Pushed data to gene collection')
    #play system sound when finished (tested on Mac)
    print('\a')
    
else:
    print("Input 'push' or 'empty' as an arg on the command line.")


connection.close()