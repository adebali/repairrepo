#Push data from file to pymongo db
#Author: Yashar Asgari
import csv, json, pymongo, argparse
from pymongo import MongoClient

txtfile = open('sampleSheet.txt', 'r') #txt file with subset of sample data

reader = csv.DictReader(txtfile, delimiter = '\t')


connection = MongoClient('mongodb://yasgari:701415@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/data?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
db = connection.data
collection = db['sample']
    
for row in reader:

    data = dict(row) #convert from OrderedDict to dict object
    collection.insert(data)
connection.close()
