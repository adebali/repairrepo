$(document).ready(function(){


   //$('#header').load('header.html', getCurrentPage());
    $('#footer').load('footer.html');
    $('#sidebar').load('/frontend/sidebar.html');

    const organism = getCurrentOrganism();
    console.log('current organism: ' + organism)

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


    //helper functions

    function getCurrentPage(){
        var count = 0;
        console.log('count : ', $('.navLinks').length)
        $(".navLinks").each(function() {
            count+=1
            console.log('this.href' + this.href)
            console.log('windowloc' + window.location.href)
            if (this.href == window.location.href) {
                $(this).addClass("active");
            }
        });
        console.log('# of hrefs' + count)
    }

    function getCurrentOrganism(){
        var url = window.location.href
        var organism = url.split("/").pop().split("browser")
        return organism.slice(0,-1);
    }

});