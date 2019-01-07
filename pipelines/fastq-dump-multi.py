#!/usr/bin/env python
import os
import argparse

parser = argparse.ArgumentParser(description='create a fastq file out of one or more SRA IDs\n\
fastq-dump should be in PATH')
parser.add_argument('-i', nargs="+", type=str, required= True, help='SRA ID(s)')
parser.add_argument('-o', required= True, type=str, help='output')
args = parser.parse_args()

IDs = args.i
os.system('rm -f ' + args.o)
code = ''

for SRA_ID in IDs:
    code += 'fastq-dump --stdout ' + SRA_ID + ' >>' + args.o + ' && '

code = code[:-4]
os.system(code)