#!/usr/bin/bash
ORGANISM="Mus_musculus"
GENOME="GRCm38"
ENSEMBL_VERSION="92"
ENSEMBL_BASE_BASE="ftp.ensembl.org"
ENSEMBL_BASE="ftp://${ENSEMBL_BASE_BASE}/pub"
FASTA_MID="fasta"
GFF3_MID="gff3"
GENOMES_DIRECTORY=../data
WORKING_DIRECTORY=../data

cd $WORKING_DIRECTORY

wget -r --no-parent -A ${ORGANISM}.${GENOME}.dna.chromosome.*.fa.gz ${ENSEMBL_BASE}/release-${ENSEMBL_VERSION}/${FASTA_MID}/${ORGANISM,,}/dna/

cd ${ENSEMBL_BASE_BASE}/pub/release-${ENSEMBL_VERSION}/${FASTA_MID}/${ORGANISM,,}/dna
mkdir -p ${GENOMES_DIRECTORY}/${GENOME}/Bowtie2

bowtie2-build --threads 4 -f \
${ORGANISM}.${GENOME}.dna.chromosome.1.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.2.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.3.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.4.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.5.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.6.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.7.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.8.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.9.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.10.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.11.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.12.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.13.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.14.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.15.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.16.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.17.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.18.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.19.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.X.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.Y.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.MT.fa.gz \
${GENOMES_DIRECTORY}/${GENOME}/Bowtie2/genome

zcat *gz >${GENOMES_DIRECTORY}/${GENOME}/genome.fa && cd ${GENOMES_DIRECTORY}/${GENOME} && samtools faidx genome.fa
wget -O ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3.gz ${ENSEMBL_BASE}/release-${ENSEMBL_VERSION}/${GFF3_MID}/${ORGANISM,,}/${ORGANISM}.${GENOME}.${ENSEMBL_VERSION}.gff3.gz && gunzip ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3.gz && gff2bed.py -i ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3 -r gene -o ${GENOMES_DIRECTORY}/${GENOME}/genes.bed && rm ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3