#!/usr/bin/bash
ORGANISM="Saccharomyces_cerevisiae"
GENOME="R64-1-1"
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
${ORGANISM}.${GENOME}.dna.chromosome.I.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.II.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.III.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.IV.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.V.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.VI.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.VII.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.VIII.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.IX.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.X.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.XI.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.XII.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.XIII.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.XIV.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.XV.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.XVI.fa.gz,\
${ORGANISM}.${GENOME}.dna.chromosome.Mito.fa.gz \
${GENOMES_DIRECTORY}/${GENOME}/Bowtie2/genome

zcat *gz >${GENOMES_DIRECTORY}/${GENOME}/genome.fa && cd ${GENOMES_DIRECTORY}/${GENOME} && samtools faidx genome.fa
wget -O ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3.gz ${ENSEMBL_BASE}/release-${ENSEMBL_VERSION}/${GFF3_MID}/${ORGANISM,,}/${ORGANISM}.${GENOME}.${ENSEMBL_VERSION}.gff3.gz && gunzip ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3.gz && gff2bed.py -i ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3 -r gene -o ${GENOMES_DIRECTORY}/${GENOME}/genes.bed && rm ${GENOMES_DIRECTORY}/${GENOME}/genes.gff3