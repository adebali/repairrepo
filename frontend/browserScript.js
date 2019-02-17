$(document).ready(function(){
    
    
        $('#header').load('header.html');
        $('#footer').load('footerNew.html');
        $('#sidebar').load('sidebar.html');
    
        const organism = getCurrentOrganism();
        console.log('current organism: ' + organism)
    
        //CODE FOR IGV.JS GENOME BROSWER 
        var igv2;
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
            igv2 = browser;
        })
        
    
        $(document).on("change", "textarea", function(){
            //array of tracks to be selected or removed
            var selectedTracks = $("#selectedTracks").text().split(",");
            var removeTracks = $("#deselectedTracks").text().split(",");

            console.log("tracks to be selected " + JSON.stringify(selectedTracks))
            console.log("tracks to be removed " + JSON.stringify(deselectedTracks))
        });
 
        
        //TODO
        function addTrack(track){

        }

        var removeTrackByName = function (trackName) {
            for (var i = 0, l = igv2.browser.trackViews.length; i < l; i++) {
                var trackView = igv2.browser.trackViews[i];
                if (trackView.track.name === trackName) {
                    igv2.browser.removeTrack(trackView.track);
                    return;
                }
            }
        };
        removeTrackByName("HG02450").then(console.log("removed track"))
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