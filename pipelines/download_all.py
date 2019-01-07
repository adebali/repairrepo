#!/usr/bin/env python
import argparse
import json
import os

parser = argparse.ArgumentParser(description='download all files through fastq')
parser.add_argument('-i', type=str, required= True, help='SRA ID(s)')
parser.add_argument('-d', type=str, default="/data", help='data location')
args = parser.parse_args()
dataLocation = args.d

inputFile = args.i
code = ''

j = json.load(open(inputFile))
for sample in j:
    outputFile = os.path.join(dataLocation, sample["title"] + ".fastq")
    if not os.path.isfile(outputFile):
        IDs = sample["SRA"]["runs"]
        code = "python fastq-dump-multi.py -i " + " ".join(IDs) + " -o " + outputFile
        print(code)
        os.system(code)