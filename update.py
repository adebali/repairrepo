#Push data from file to pymongo db
#Author: Yashar Asgari
import csv, json, pymongo, argparse
from pymongo import MongoClient


parser = argparse.ArgumentParser(description = 'argparse for organism type')
parser.add_argument('organism')
args = parser.parse_args()


txtfile = open('testUpsert.txt', 'r') #txt file with subset of sample data

reader = csv.DictReader(txtfile, delimiter = '\t')


connection = MongoClient('mongodb://yasgari:701415@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/data?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
db = connection.data
collection = db['gene']
    
for row in reader:

    data = dict(row) #convert from OrderedDict to dict object
    data['organism'] = 'mouse'
    geneName = data['name']


    cursor = collection.find({'$and':[{"organism":args.organism}, {"name": geneName}]})

    if(cursor.count() == 0):
        
        iterData = dict.copy(data)
        for key in iterData.keys():
            if(iterData[key] is None):
                data.pop(key,None)

        collection.insert(data)
    elif(cursor.count() > 1): #there should only be 1 document for each organism/gene pair
        raise ValueError("Duplicate document found. More than one found for Gene " + geneName + " for " + args.organism)

    for oldDoc in cursor: 
            for key in data.keys():
        
                oldDoc[key] = data[key]
                uqId = oldDoc['_id']
                if(data[key] is None):
                    oldDoc.pop(key, None) #get rid of null fields
                else:
                    print('')
                    #update using document's unique ID
                    collection.update({"_id": uqId}, {"$set":{key:oldDoc[key]}})    


connection.close()
