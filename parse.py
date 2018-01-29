import csv, json, pymongo
from pymongo import MongoClient

txtfile = open('small.txt', 'r') #txt file with subset of sample data

reader = csv.DictReader(txtfile, delimiter = '\t')
data = []
for row in reader:
    data.append(row)

#json.dump(data, jsonfile, indent= 4) #print to terminal 'pretty' json

mongoImp = json.dumps(data) #this is valid json 

connection = MongoClient('mongodb://yasgari:701415@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/sampleResultsDb?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
db = connection.sampleResultsDb
collection = db['sample']
mongoImpDic = {'human': mongoImp}
print(mongoImpDic) #looks normal in terminal, added '\' when uploaded to server
test = collection.insert_one(mongoImpDic)

connection.close()
