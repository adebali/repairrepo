$(document).ready(function(){


    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('#sidebar').load('sidebar.html');

    //const organism = getCurrentOrganism();
    //console.log('current organism: ' + organism)

    //CODE FOR IGV.JS GENOME BROSWER 

    
        var igvDiv =  document.getElementById("igvContainer");
        var options = {
            genome: "hg19",
            locus: "chr8:128,747,267-128,754,546",
            tracks: [
                {
                    type: 'alignment',
                    format: 'bam',
                    url: 'https://data.broadinstitute.org/igvdata/1KG/b37/data/HG02450/alignment/HG02450.mapped.ILLUMINA.bwa.ACB.low_coverage.20120522.bam',
                    name: 'HG02450'
                },
                //second track, use example from igv to toggle certain tracks on and off
                {
                    type: 'alignment',
                    format: 'bam',
                    url: 'https://data.broadinstitute.org/igvdata/1KG/b37/data/HG02450/alignment/HG02450.mapped.ILLUMINA.bwa.ACB.low_coverage.20120522.bam',
                    name: 'HG02450'
                }
            ]
        };
        igv.createBrowser(igvDiv, options)
        .then(function (browser) {
            console.log("Created IGV browser");
        })
    

    //TODO

    function addTrack(track){

    }

    function removeTrack(track){

    }

    //helper functions

    // function getCurrentPage(){
    //     var count = 0;
    //     console.log('count : ', $('.navLinks').length)
    //     $(".navLinks").each(function() {
    //         count+=1
    //         console.log('this.href' + this.href)
    //         console.log('windowloc' + window.location.href)
    //         if (this.href == window.location.href) {
    //             $(this).addClass("active");
    //         }
    //     });
    //     console.log('# of hrefs' + count)
    // }

    // function getCurrentOrganism(){
    //     var url = window.location.href
    //     var organism = url.split("/").pop().split("browser")
    //     return organism.slice(0,-1);
    // }

    //SIDEBAR SCRIPT
    
    //script for querying the experiments, damage type, cell line, and tissue from the json file
    
    var samplejson = [ { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "0J" }, "title": "huDS_NHF1_CPD_A_0h_cell_0J", "SRA": { "id": "SRX2749363", "runs": ["SRR5461429"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "0J" }, "title": "huDS_NHF1_CPD_B_0h_cell_0J", "SRA": { "id": "SRX2749364", "runs": ["SRR5461430"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_A_0h_cell_10J", "SRA": { "id": "SRX2749365", "runs": ["SRR5461431"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_B_0h_cell_10J", "SRA": { "id": "SRX2749366", "runs": ["SRR5461432"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "1h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_A_1h_cell_10J", "SRA": { "id": "SRX2749367", "runs": ["SRR5461433"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "1h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_B_1h_cell_10J", "SRA": { "id": "SRX2749368", "runs": ["SRR5461434"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "8h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_A_8h_cell_10J", "SRA": { "id": "SRX2749369", "runs": ["SRR5461435"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "8h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_B_8h_cell_10J", "SRA": { "id": "SRX2749370", "runs": ["SRR5461436"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "24h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_A_24h_cell_10J", "SRA": { "id": "SRX2749371", "runs": ["SRR5461437"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "24h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_B_24h_cell_10J", "SRA": { "id": "SRX2749372", "runs": ["SRR5461438"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "36h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_A_36h_cell_10J", "SRA": { "id": "SRX2749373", "runs": ["SRR5461439"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "36h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_B_36h_cell_10J", "SRA": { "id": "SRX2749374", "runs": ["SRR5461440"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "48h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_A_48h_cell_10J", "SRA": { "id": "SRX2749375", "runs": ["SRR5461441"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "48h", "DNA": "cell", "damage_dose": "10J" }, "title": "huDS_NHF1_CPD_B_48h_cell_10J", "SRA": { "id": "SRX2749376", "runs": ["SRR5461442"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "0J" }, "title": "huDS_NHF1_64PP_A_0h_cell_0J", "SRA": { "id": "SRX2749377", "runs": ["SRR5461443"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "0J" }, "title": "huDS_NHF1_64PP_B_0h_cell_0J", "SRA": { "id": "SRX2749378", "runs": ["SRR5461444"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_A_0h_cell_20J", "SRA": { "id": "SRX2749379", "runs": ["SRR5461445"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_B_0h_cell_20J", "SRA": { "id": "SRX2749380", "runs": ["SRR5461446"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "20m", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_A_20m_cell_20J", "SRA": { "id": "SRX2749381", "runs": ["SRR5461447"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "20m", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_B_20m_cell_20J", "SRA": { "id": "SRX2749382", "runs": ["SRR5461448"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "1h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_A_1h_cell_20J", "SRA": { "id": "SRX2749383", "runs": ["SRR5461449"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "1h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_B_1h_cell_20J", "SRA": { "id": "SRX2749384  ", "runs": ["SRR5461450"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "2h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_A_2h_cell_20J", "SRA": { "id": "SRX2749385", "runs": ["SRR5461451"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "2h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_B_2h_cell_20J", "SRA": { "id": "SRX2749386", "runs": ["SRR5461452"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "4h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_A_4h_cell_20J", "SRA": { "id": "SRX2749387", "runs": ["SRR5461453"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "4h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_NHF1_64PP_B_4h_cell_20J", "SRA": { "id": "SRX2749388", "runs": ["SRR5461454"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "naked", "damage_dose": "20J" }, "title": "huDS_GM12878_CPD_A_0h_naked_20J", "SRA": { "id": "SRX2749393 ", "runs": ["SRR5461459"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "naked", "damage_dose": "20J" }, "title": "huDS_GM12878_CPD_B_0h_naked_20J", "SRA": { "id": "SRX2749394 ", "runs": ["SRR5461460"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "naked", "damage_dose": "20J" }, "title": "huDS_GM12878_64PP_A_0h_naked_20J", "SRA": { "id": "SRX2749389", "runs": ["SRR5461455"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "naked", "damage_dose": "20J" }, "title": "huDS_GM12878_64PP_B_0h_naked_20J", "SRA": { "id": "SRX2749390", "runs": ["SRR5461456"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_GM12878_CPD_A_0h_cell_20J", "SRA": { "id": "SRX2749395", "runs": ["SRR5461461"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_CPD", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_GM12878_CPD_B_0h_cell_20J", "SRA": { "id": "SRX2749396", "runs": ["SRR5461462"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "A", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_GM12878_64PP_A_0h_cell_20J", "SRA": { "id": "SRX2749391", "runs": ["SRR5461457"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "Human_UV_Damage-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_64PP", "protocol": "Damage-seq", "replicate": "B", "treatment": { "time_after_irradiation": "0h", "DNA": "cell", "damage_dose": "20J" }, "title": "huDS_GM12878_64PP_B_0h_cell_20J", "SRA": { "id": "SRX2749392", "runs": ["SRR5461458"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "5m" }, "title": "yeastXR_CPD_A_5m", "SRA": { "id": "SRX3699740 ", "runs": ["SRR6726725"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "5m" }, "title": "yeastXR_CPD_B_5m", "SRA": { "id": "SRX3699741", "runs": ["SRR6726726"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "20m" }, "title": "yeastXR_CPD_A_20m", "SRA": { "id": "SRX3699742", "runs": ["SRR6726727"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "20m" }, "title": "yeastXR_CPD_B_20m", "SRA": { "id": "SRX3699743", "runs": ["SRR6726728"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "1h" }, "title": "yeastXR_CPD_A_1h", "SRA": { "id": "SRX3699744", "runs": ["SRR6726729"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "1h" }, "title": "yeastXR_CPD_B_1h", "SRA": { "id": "SRX3699745", "runs": ["SRR6726730"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "5m" }, "title": "yeastXR_64PP_A_5m", "SRA": { "id": "SRX3699746", "runs": ["SRR6726731"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "5m" }, "title": "yeastXR_64PP_B_5m", "SRA": { "id": "SRX3699747", "runs": ["SRR6726732"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "20m" }, "title": "yeastXR_64PP_A_20m", "SRA": { "id": "SRX3699748", "runs": ["SRR6726733"] } }, { "organism": "Saccharomyces cerevisiae", "reference_genome": "R64-1-1", "experiment": "Yeast_UV_XR-seq", "cell_line": false, "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "20m" }, "title": "yeastXR_64PP_B_20m", "SRA": { "id": "SRX3699749", "runs": ["SRR6726734"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "30m", "ZT": 2 }, "title": "arabidopsis_CPD_A_2", "SRA": { "id": "SRX3542457", "runs": ["SRR6451563"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "30m", "ZT": 2 }, "title": "arabidopsis_CPD_B_2", "SRA": { "id": "SRX3542465", "runs": ["SRR6451571"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "30m", "ZT": 5 }, "title": "arabidopsis_CPD_A_5", "SRA": { "id": "SRX3542458", "runs": ["SRR6451564"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "30m", "ZT": 5 }, "title": "arabidopsis_CPD_B_5", "SRA": { "id": "SRX3542466", "runs": ["SRR6451572"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "30m", "ZT": 8 }, "title": "arabidopsis_CPD_A_8", "SRA": { "id": "SRX3542459", "runs": ["SRR6451565"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "30m", "ZT": 8 }, "title": "arabidopsis_CPD_B_8", "SRA": { "id": "SRX3542467", "runs": ["SRR6451573"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "30m", "ZT": 11 }, "title": "arabidopsis_CPD_A_11", "SRA": { "id": "SRX3542460", "runs": ["SRR6451566"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "30m", "ZT": 11 }, "title": "arabidopsis_CPD_B_11", "SRA": { "id": "SRX3542468", "runs": ["SRR6451574"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "30m", "ZT": 14 }, "title": "arabidopsis_CPD_A_14", "SRA": { "id": "SRX3542461", "runs": ["SRR6451567"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "30m", "ZT": 14 }, "title": "arabidopsis_CPD_B_14", "SRA": { "id": "SRX3542469 ", "runs": ["SRR6451575"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_irradiation": "30m", "ZT": 17 }, "title": "arabidopsis_CPD_A_17", "SRA": { "id": "SRX3542454", "runs": ["SRR6451560"] } }, { "organism": "Arabidopsis thaliana", "reference_genome": "TAIR10", "experiment": "Arabidopsis_CPD_XR-seq", "cell_line": false, "tissue": "whole plant", "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_irradiation": "30m", "ZT": 17 }, "title": "arabidopsis_CPD_B_17", "SRA": { "id": "SRX3542462", "runs": ["SRR6451568"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 0 }, "title": "mouseCirca_kidney_A_0", "SRA": { "id": "SRX3636258", "runs": ["SRR6659131"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 0 }, "title": "mouseCirca_kidney_B_0", "SRA": { "id": "SRX3636259", "runs": ["SRR6659132"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 4 }, "title": "mouseCirca_kidney_A_4", "SRA": { "id": "SRX3636260", "runs": ["SRR6659133"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 4 }, "title": "mouseCirca_kidney_B_4", "SRA": { "id": "SRX3636261", "runs": ["SRR6659134"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 8 }, "title": "mouseCirca_kidney_A_8", "SRA": { "id": "SRX3636262", "runs": ["SRR6659135"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 8 }, "title": "mouseCirca_kidney_B_8", "SRA": { "id": "SRX3636263", "runs": ["SRR6659136"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 12 }, "title": "mouseCirca_kidney_A_12", "SRA": { "id": "SRX3636264", "runs": ["SRR6659137"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 12 }, "title": "mouseCirca_kidney_B_12", "SRA": { "id": "SRX3636265", "runs": ["SRR6659138"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 16 }, "title": "mouseCirca_kidney_A_16", "SRA": { "id": "SRX3636266", "runs": ["SRR6659139"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 16 }, "title": "mouseCirca_kidney_B_16", "SRA": { "id": "SRX3636267", "runs": ["SRR6659140"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 20 }, "title": "mouseCirca_kidney_A_20", "SRA": { "id": "SRX3636268", "runs": ["SRR6659141"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "kidney", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 20 }, "title": "mouseCirca_kidney_B_20", "SRA": { "id": "SRX3636269", "runs": ["SRR6659142"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 0 }, "title": "mouseCirca_liver_A_0", "SRA": { "id": "SRX3636270", "runs": ["SRR6659143"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 0 }, "title": "mouseCirca_liver_B_0", "SRA": { "id": "SRX3636271", "runs": ["SRR6659144"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 4 }, "title": "mouseCirca_liver_A_4", "SRA": { "id": "SRX3636272", "runs": ["SRR6659145"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 4 }, "title": "mouseCirca_liver_B_4", "SRA": { "id": "SRX3636273", "runs": ["SRR6659146"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 8 }, "title": "mouseCirca_liver_A_8", "SRA": { "id": "SRX3636274", "runs": ["SRR6659147"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 8 }, "title": "mouseCirca_liver_B_8", "SRA": { "id": "SRX3636275", "runs": ["SRR6659148"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 12 }, "title": "mouseCirca_liver_A_12", "SRA": { "id": "SRX3636276", "runs": ["SRR6659149"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 12 }, "title": "mouseCirca_liver_B_12", "SRA": { "id": "SRX3636277", "runs": ["SRR6659150"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 16 }, "title": "mouseCirca_liver_A_16", "SRA": { "id": "SRX3636278", "runs": ["SRR6659151"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 16 }, "title": "mouseCirca_liver_B_16", "SRA": { "id": "SRX3636279", "runs": ["SRR6659152"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 20 }, "title": "mouseCirca_liver_A_20", "SRA": { "id": "SRX3636280", "runs": ["SRR6659153"] } }, { "organism": "Mus musculus", "reference_genome": "GRCm38", "experiment": "Mouse_cisplatin_ciradian_XR-seq", "cell_line": false, "tissue": "liver", "damage": "cisplatin", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "2h", "dose": "10mg/kg", "ZT": 20 }, "title": "mouseCirca_liver_B_20", "SRA": { "id": "SRX3636281", "runs": ["SRR6659154"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 WT", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "WT" }, "title": "ecoli_WT_A", "SRA": { "id": "SRX2439928", "runs": ["SRR5125157"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 WT", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "WT" }, "title": "ecoli_WT_B", "SRA": { "id": "SRX2439929", "runs": ["SRR5125158"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 phr", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "phr" }, "title": "ecoli_phr_A", "SRA": { "id": "SRX2439930", "runs": ["SRR5125159"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 phr", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "phr" }, "title": "ecoli_phr_B", "SRA": { "id": "SRX2439931", "runs": ["SRR5125160"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 mfd", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "mfd" }, "title": "ecoli_mfd_A", "SRA": { "id": "SRX2439932", "runs": ["SRR5125161"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 mfd", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "mfd" }, "title": "ecoli_mfd_B", "SRA": { "id": "SRX2439933", "runs": ["SRR5125162"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 uvrD", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "uvrD" }, "title": "ecoli_uvrD_A", "SRA": { "id": "SRX2439934", "runs": ["SRR5125163"] } }, { "organism": "Escherichia coli", "experiment": "ecoli_XR-seq", "cell_line": "K-12 MG1655 uvrD", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "5m", "dose": "120J", "background": "uvrD" }, "title": "ecoli_uvrD_B", "SRA": { "id": "SRX2439935 ", "runs": ["SRR5125164"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "tXR-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "1h", "dose": "20J" }, "title": "tXR_CPD_A", "SRA": { "id": "SRX2733734", "runs": ["SRR5444675"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "tXR-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "1h", "dose": "20J" }, "title": "tXR_CPD_B", "SRA": { "id": "SRX2733735", "runs": ["SRR5444676"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "tXR-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_BPDE", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "1h", "dose": "20J" }, "title": "tXR_BPDE_A", "SRA": { "id": "SRX2733736", "runs": ["SRR5444677"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "tXR-seq", "cell_line": "GM12878", "tissue": false, "damage": "UV_BPDE", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "1h", "dose": "20J" }, "title": "tXR_BPDE_B", "SRA": { "id": "SRX2733737", "runs": ["SRR5444678"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "WT" }, "title": "NHF1_XR-seq_TCR_CPD_A", "SRA": { "id": "SRX2733738", "runs": ["SRR5444679","SRR5444680"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "NHF1", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "WT" }, "title": "NHF1_XR-seq_TCR_CPD_B", "SRA": { "id": "SRX2733739 ", "runs": ["SRR5444681","SRR5444682"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "WT" }, "title": "NHF1_XR-seq_TCR_64PP_A", "SRA": { "id": "SRX2733740", "runs": ["SRR5444683","SRR5444684"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "NHF1", "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "WT" }, "title": "NHF1_XR-seq_TCR_64PP_B", "SRA": { "id": "SRX2733741", "runs": ["SRR5444685","SRR5444686"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM15983", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "XPC" }, "title": "XPC_XR-seq_TCR_CPD_A", "SRA": { "id": "SRX997098 ", "runs": ["SRR1976064"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM15983", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "XPC" }, "title": "XPC_XR-seq_TCR_CPD_B", "SRA": { "id": "SRX997099", "runs": ["SRR1976065"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM15983", "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "XPC" }, "title": "XPC_XR-seq_TCR_64PP_A", "SRA": { "id": "SRX997100", "runs": ["SRR1976066"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM15983", "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "XPC" }, "title": "XPC_XR-seq_TCR_64PP_B", "SRA": { "id": "SRX997101    ", "runs": ["SRR1976067"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM16095", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "CSB" }, "title": "CSB_XR-seq_TCR_CPD_A", "SRA": { "id": "SRX997102", "runs": ["SRR1976068"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM16095", "tissue": false, "damage": "UV_CPD", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "CSB" }, "title": "CSB_XR-seq_TCR_CPD_B", "SRA": { "id": "SRX997103", "runs": ["SRR1976069"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM16095", "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "A", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "CSB" }, "title": "CSB_XR-seq_TCR_64PP_A", "SRA": { "id": "SRX997104", "runs": ["SRR1976070"] } }, { "organism": "Homo sapiens", "reference_genome": "GRCh38", "experiment": "human_TCR_UV_XR", "cell_line": "GM16095", "tissue": false, "damage": "UV_64PP", "protocol": "XR-seq", "replicate": "B", "treatment": { "time_after_treatment": "?", "dose": "20J", "background": "CSB" }, "title": "CSB_XR-seq_TCR_64PP_B", "SRA": { "id": "SRX997105", "runs": ["SRR1976071"] } } ] 

    var experimentList = [] 
    var damageList= []
    var cellLineList = []
    var trackList = [];
    var currentOrganism = getCurrentOrganism();
    
    samplejson.forEach(element => {
        if(currentOrganism.localeCompare(element["organism"]) === 0){
            experimentList.push(element)
        }

    });
    //populate categories 
    $("#expList").html(populate(experimentList,"exp"))
    
    //helper function returning an html string of list to append to sidebar 
    //'type' is the class denoting which category the attribute is apart of
    function populate(list, cat){
        var html = ""
        list.forEach(element =>{
            if(!html.includes(element["experiment"])){
                var num = getOccurrence(list,element)
                html+="<p id = '"+element["experiment"] + "' class = 'tab " + cat+"'><b>" + element['experiment'] + "</b>   +</p>"
                //create a div for each experiement (used for collapsible subcategories)
                html+= "<div id='"+element['experiment']+"' class = 'experiment'></div>"
            }
        });
        return html;
    }

    function populateCellLine(exp){
    
        var cellLineListHTML = "<h5 id= 'cellList" + exp + "'><b>Cell Line: </b></h5>";
        experimentList.forEach(element =>{
            if(element["experiment"]===exp){
                //dont add "false" to html, resolve this in the if statement below
                
                if(!element["cell_line"] === false){
                    console.log("2nd if")
                //prevent duplicate cell lines to be populated each a time
                
                    if(!cellLineListHTML.includes(element["cell_line"])){
                        cellLineListHTML += "<p class = 'cellLineP' id = '" + element["cell_line"]+ "' >" + element["cell_line"] + "   +</p>" + "<div id = '"+ element["cell_line"] + "' class = 'cellLine " + exp+ "'></div>";
                    }
                }
            }
        })
        if(!cellLineListHTML.includes("cellLineP")){
            
            return populateDamageType(false, exp, false)
        }
        if($("div#"+exp).text().indexOf("Cell Line") === -1){
            
            $("div#"+exp).html(cellLineListHTML).addClass("tab2")
            return;
        }
        
        
    }

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }
    
    function populateDamageType(cellLine, parentExp, bool){
        var damageHTML = "<h5 id = 'damageList"+ cellLine+"'><b>Damage Type:</b></h5>";
        
        experimentList.forEach(element =>{
        
            if(element["cell_line"]===cellLine && element["experiment"]===parentExp){
                //prevent duplicate cell lines to be populated each a time
                if(!damageHTML.includes(element["damage"])){
                   
                    damageHTML += "<p class = 'damageP "+cellLine+ " " + parentExp + "' id = '"+element["damage"]+"'>"+element["damage"]+"   +</p>";
                    damageHTML += "<div id = '"+element["damage"]+"' class = 'tab3 damage "+cellLine+ " " + parentExp + "'></div>";
                }
            }
        })
        if($("div#"+cellLine + "."+parentExp).text().indexOf("Damage") === -1 && bool === true){
            $("div#"+cellLine+"."+parentExp).html(damageHTML).addClass("tab3")
        }else if(bool === false){
            $("div#"+parentExp+".experiment").html(damageHTML).addClass("tab3")
        }
        return;
    }
    //needs exp and cell line too
    //populate track list when user selects a damage type
    function populateTracks(damage, parCell, grandparentExp){
        if(parCell === grandparentExp){
            parCell = false;
        }
        var tracksHTML = "<h5 id = 'tracksList"+damage+"'><b>Tracks</b></h5>";
        experimentList.forEach(element =>{
            if(element["damage"] === damage && element["cell_line"] === parCell && element["experiment"]===grandparentExp){
                if(!tracksHTML.includes(element["title"])){
                    tracksHTML += "<p class = 'track "+ damage+" "+ grandparentExp+ "' id = '"+element["title"]+"'>"+ element["title"] + "</p>";
                }
            }
        })
        if($("div#"+damage + "."+grandparentExp).text().indexOf("Tracks") === -1){
            
            $("div#"+damage + "."+grandparentExp).html(tracksHTML).addClass("tab4")
        }
        return;
    }

    //populate cell lines when user selects experiment
    $(".exp").on("click", function(){

        var selected = $(this).hasClass("highlight");
        if(selected){
            $(this).removeClass("highlight");
            var thisExp = $(this).attr("id")
            $("#"+thisExp+" .cellLine").remove();
            $("#"+thisExp + " .cellLineP").remove();
            $("#cellList" + thisExp).remove();
            $("div#"+thisExp + " .experiment.tab2").remove();
            //if exp doesnt have cell line and populated damage:
            $("#damageListfalse").remove()
            $(".false").remove();
            //add '+' instead of '-' when it's selected
            var oldHTML = $(this).html()
            var newHTML = oldHTML.split("   -")[0] + "   +";
            $(this).html(newHTML);
            return;
           
        }else{
            $(this).addClass("highlight");
            //add '-' instead of '+' when it's selected
            var oldHTML = $(this).html()
            var newHTML = oldHTML.split("   +")[0] + "   -";
            $(this).html(newHTML);
            return(populateCellLine($(this).attr("id")));
        }

        console.log($(this).attr("id") + " selected");
       
        
    })
    //populate damage type when user selects a cell line
    $(document).on("click", ".cellLineP", function(){
        var selected = $(this).hasClass("highlight");
        if(!selected){
            $(this).addClass("highlight")
            var parentExp = $(this).parent().attr("id")
            //add '-' instead of '+' when it's selected
            var oldHTML = $(this).html()
            var newHTML = oldHTML.split("   +")[0] + "   -";
            $(this).html(newHTML);
            return(populateDamageType($(this).attr("id"), parentExp, true))
            
        }else{
            $(this).removeClass("highlight")
            var thisCellLine = $(this).attr("id")
            $("#damageList"+thisCellLine).empty();
            $("."+thisCellLine).empty();
            //add '+' instead of '-' when it's selected
            var oldHTML = $(this).html()
            var newHTML = oldHTML.split("   -")[0] + "   +";
            $(this).html(newHTML);
            return;
        }
        console.log($(this).attr("id") + "selected cell line")
        
    })
    //populate tracks when user selects a damage type
    $(document).on("click", ".damageP", function(){
        var selected = $(this).hasClass("highlight");
        
        if(!selected){
            $(this).addClass("highlight")
            var parCellLine  = $(this).parent().attr("id");
            parExp = $(this).parent().parent().attr("id");
            if(parExp === "expList"){
                parExp = parCellLine
            }
            //add '-' instead of '+' when it's selected
            var oldHTML = $(this).html()
            var newHTML = oldHTML.split("   +")[0] + "   -";
            $(this).html(newHTML);
            
            return(populateTracks($(this).attr("id"), parCellLine, parExp))
        }else{
            $(this).removeClass("highlight")
            var dam = $(this).attr("id");
            var parCellLine  = $(this).parent().attr("id");
            var parExp = $(this).parent().parent().attr("id");
            if(parExp === "expList"){
                parExp = parCellLine
            }
            console.log("parExp " + parExp)
            $("."+dam + "."+parExp).empty();
            $("#tracksList"+dam).remove();
            //add '+' instead of '-' when it's selected
            var oldHTML = $(this).html()
            var newHTML = oldHTML.split("   -")[0] + "   +";
            $(this).html(newHTML);
            return;
        }
    })

    $(document).on("click", ".track", function(){
        var selected = $(this).hasClass("highlight");
        if(!selected){
            $(this).addClass("highlight")
            return(console.log("adding track"+ $(this).attr("id")+ "to browser"))
        }else{
            $(this).removeClass("highlight")
            return(console.log("removing track"+ $(this).attr("id")+ "from browser"))
            
        }
    })




    function getCurrentOrganism(){
        var url = window.location.href
        var organism = url.split("/").pop().split("browser")
        organism =  organism.slice(0,-1);
        organism = JSON.stringify(organism[0]).replace(/['"]+/g, '')
        
        
       
        //map to exact name of organism (if page name differs)
        //TODO: map file names to rest of organism names
        if(organism == "human"){
            return "Homo sapiens"
        }else if(organism == "mouse"){
            return "Mus musculus"
        }else if(organism == "yeast"){
            return "Saccharomyces cerevisiae"
        }else if(organism == "ecoli"){
            return "Escherichia coli"
        }else if(organism == "arabidopsis"){
            return "Arabidopsis thaliana"
        }
    }



});