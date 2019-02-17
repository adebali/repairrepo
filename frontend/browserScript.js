$(document).ready(function(){
    
    
        $('#header').load('header.html');
        $('#footer').load('footerNew.html');
        $('#sidebar').load('sidebar.html');
    
        const organism = getCurrentOrganism();
        console.log('current organism: ' + organism)
    

    
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

         function removeTrack(track){

         }

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