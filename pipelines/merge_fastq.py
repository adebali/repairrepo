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


def run(code):
    print(code)
    # os.system(code)

j = json.load(open(inputFile))
for sample in j:
    outputFile = os.path.join(dataLocation, sample["title"] + ".fastq")
    if not os.path.isfile(outputFile):
        IDs = sample["SRA"]["runs"]
        if len(IDs) == 1:
            code = "mv " + os.path.join(dataLocation, IDs[0]) + ".fastq" + " " + outputFile
            run(code)
        else:
            code = "rm -f " + outputFile
            run(code)
            for ID in IDs:
                code = "cat " + os.path.join(dataLocation, ID) + ".fastq" + " >>" + outputFile
                run(code)