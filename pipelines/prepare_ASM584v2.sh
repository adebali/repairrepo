#!/usr/bin/bash
BASE_DIR=$(pwd)
ORGANISM="Escherichia_coli_str_k_12_substr_mg1655"
GENOME="ASM584v2"
ENSEMBL_VERSION="42"
ENSEMBL_BASE_BASE="ftp.ensemblgenomes.org"
ENSEMBL_BASE="ftp://${ENSEMBL_BASE_BASE}/pub"
FASTA_MID="bacteria/fasta/bacteria_0_collection"
GFF3_MID="bacteria/gff3/bacteria_0_collection"
GENOMES_DIRECTORY=../data
WORKING_DIRECTORY=../data

cd $WORKING_DIRECTORY


wget -r --no-parent -A ${ORGANISM}.${GENOME}.dna.chromosome.*.fa.gz ${ENSEMBL_BASE}/release-${ENSEMBL_VERSION}/${FASTA_MID}/${ORGANISM,,}/dna/

cd ${ENSEMBL_BASE_BASE}/pub/release-${ENSEMBL_VERSION}/${FASTA_MID}/${ORGANISM,,}/dna
mkdir -p ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/Bowtie2

bowtie2-build --threads 4 -f \
${ORGANISM}.${GENOME}.dna.chromosome.Chromosome.fa.gz \
${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/Bowtie2/genome

zcat *gz >${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/genome.fa && cd ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME} && samtools faidx genome.fa
wget -O ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/genes.gff3.gz ${ENSEMBL_BASE}/release-${ENSEMBL_VERSION}/${GFF3_MID}/${ORGANISM,,}/${ORGANISM}.${GENOME}.37.gff3.gz && gunzip ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/genes.gff3.gz && gff2bed.py -i ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/genes.gff3 -r gene -o ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/genes.bed && rm ${BASE_DIR}/${GENOMES_DIRECTORY}/${GENOME}/genes.gff3