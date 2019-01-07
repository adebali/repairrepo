#!/usr/bin/env python
import argparse
import json

parser = argparse.ArgumentParser(description='download all files through fastq')
parser.add_argument('-i', type=str, required= True, help='SRA ID(s)')
args = parser.parse_args()

inputFile = args.i
code = ''

j = json.load(open(inputFile))
for sample in j:
    IDs = sample["SRA"]["runs"]
    code = "python3 fastq-dump-all.py -i " + " ".join(IDs) + " -o " + sample["title"] + ".fastq"
    print(code)
    # os.system(code)