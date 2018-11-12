#!#!/usr/bin/env python3
import os
import json
import argparse
import urllib.request

parser = argparse.ArgumentParser(description='Prepare reference genome')
parser.add_argument('-g', type=str, help='genome')
args = parser.parse_args()

def findGenomeRecord(genome, referenceList):
    for item in referenceList:
        if item['id'] == genome:
            return item
    return None

referenceJsonLink = 'https://s3.amazonaws.com/igv.org.genomes/genomes.json'
os.system('wget -nc ' + referenceJsonLink)

# referenceJson = os.path.join(os.path.dirname(os.path.realpath(__file__)), '..', 'igv.js', 'resources', 'genomes.json')
referenceJson = 'genomes.json'
filein = open(referenceJson, 'r')

referenceList = json.load(filein)
genome = args.g
genomeRecord = findGenomeRecord(genome, referenceList)

os.system('wget ' + genomeRecord['fastaURL'])
os.system('wget ' + genomeRecord['indexURL'])