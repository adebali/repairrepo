#Push data from file to pymongo db
#Author: Yashar Asgari
import csv, json, pymongo
from pymongo import MongoClient

txtfile = open('testUpsert.txt', 'r') #txt file with subset of sample data

reader = csv.DictReader(txtfile, delimiter = '\t')

connection = MongoClient('mongodb://yasgari:701415@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/data?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
db = connection.data
collection = db['gene']
    
for row in reader:

    data = dict(row) #convert from OrderedDict to dict object
    data['organism'] = 'mouse'
    geneName = data['name']
    

    cursor = collection.find({'$and':[{"organism":"mouse"}, {"name": geneName}]})
    for oldDoc in cursor: 
            for key in data.keys():
        
                oldDoc[key] = data[key]
                uqId = oldDoc['_id']
                if(data[key] is None):
                    oldDoc.pop(key, None) #get rid of null fields
                else:
                    #update using document's unique ID
                    collection.update({"_id": uqId}, {"$set":{key:oldDoc[key]}})    


connection.close()
