#Push data from file to pymongo db
#Author: Yashar Asgari

import pymongo
from pymongo import MongoClient


connection = MongoClient('mongodb://USER:PASSWORD@sancarlabdb-shard-00-00-v0rht.mongodb.net:27017,sancarlabdb-shard-00-01-v0rht.mongodb.net:27017,sancarlabdb-shard-00-02-v0rht.mongodb.net:27017/data?ssl=true&replicaSet=SancarLabDB-shard-0&authSource=admin')
db = connection.data
collection = db['gene'].delete_many({}) #try this method

connection.close()

