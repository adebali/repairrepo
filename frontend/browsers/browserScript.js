$(document).ready(function(){



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
            }
        ]
    };
    igv.createBrowser(igvDiv, options)
    .then(function (browser) {
        console.log("Created IGV browser");
    })


    
});