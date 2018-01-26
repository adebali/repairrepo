import csv
import json

txtfile = open('small.txt', 'r') #txt file with subset of sample data
jsonfile = open('parsed.json', 'w') #output file

reader = csv.DictReader(txtfile, delimiter = '\t')

data = []
for row in reader:
    data.append(row)

json.dump(data, jsonfile, indent= 4)
