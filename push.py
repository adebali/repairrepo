#Push data from file to pymongo db
#Author: Yashar Asgari

import csv, json, pymongo
from pymongo import MongoClient

txtfile = open('sample.txt', 'r') #txt file with subset of sample data

reader = csv.DictReader(txtfile, delimiter = '\t')

connection = MongoClient('mongodb://USER:PASSWORD@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/data?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
db = connection.data
collection = db['gene']

for row in reader:
    data = dict(row)
    data['organism'] = 'mouse'
    collection.insert(json.loads(json.dumps(data)))

connection.close()
