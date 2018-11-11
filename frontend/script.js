//Script for RepairRepo database project's search page- written by Yashar Asgari
$(document).ready(function(){
    
      
            // load in header/footer & call function to identify current page
            $('#header').load('/frontend/header.html', getCurrentPage());
            $('#footer').load('/frontend/footer.html');
    
            //load tabs for gene queries
            var $tabs = $('#tabsList').tabs();
          
    
    
            //first, create list of gene names for autocomplete
            queryResultsAuto([{}])
        
            //query db for sample sheet in order to get columns/data for each experiment for plotting purposes
            getSampleSheet();     
        
        
            //prep server connection
            const clientPromise = stitch.StitchClientFactory.create('dataretrieval-vwdtg');
            
        
        
            //Global Variables
            var selectedOrganism = 'mouse';
            var orgDict = {}; //dictionary for organism type; to be used in query function
            //list of query conditions from user input
            var chrSelected = false; //keeps track if a chromosome from the dropdown is selected
            var startSelected = false;
            var endSelected = false;
            var inputStartChr;
            var inputEndChr;
            var client;
            var db;
            var returned;
            var geneInputName;
            var queryArray = [];
            var queryArray2 = [];
            var sampleSheet = []; //seeing which columns/data go to which experiment for plotting purposes
            var experiments = []; //list of each unique experiment name used in analyzeData
            var functions = []; //list of dictionaries {"Experiment name": "Function name"} functions (string name) 
            //that will be called to plot the respective experiment
            
            
            
            //page loads this by default, can change later
            orgDict.organism = 'mouse'
        
        
            //sets up server connection and chromosome placement query method
            function queryResultsChr(arg1, prev){
                $('#results').html("<img src = 'loading.gif' alt = 'Loading...'>")
                
                clientPromise.then(stitchClient =>{
                    client = stitchClient;
                    db = client.service('mongodb', 'mongodb-atlas').db('data');
                    
                    return client.login().then(queryChr(arg1, prev))
                });
            }
            var last_id1 = null;
            function queryChr(arg1, prev){
                
                arg1 = arg1.length > 0 ? { $and: arg1 } : {};
                
                if(last_id1 === null){
                    db.collection('gene').find(arg1).limit(10).execute().then(docs => {
                        var html;
                        
                        if(docs.length == 0){
                            $('#results').html("<div class = 'alert alert-warning' role = 'alert'> <strong> No results left</strong></div>")
                        }else{
                            html =  createDynamicTable(docs) +"<button id ='prev' type='button' class='button'> &lt;- Previous</button> <button id = 'next' type='button' class='button'>Next -> </button>"
                            document.getElementById("results").innerHTML = html; 
                            last_id1 = docs[docs.length-1]['_id']
                        }
                    });
                }else if(!prev){
                    db.collection('gene').find({"$and":[{'_id':{"$gt":last_id1}},arg1]}).limit(10).execute().then(docs => {
                        var html;
                        
                        if(docs.length == 0){
                            $('#results').html("<div class = 'alert alert-warning' role = 'alert'> <strong> No results left</strong></div>")
                            
                        }else{
                            html =  createDynamicTable(docs) +"<button id ='prev' type='button' class='button'> &lt;- Previous</button> <button id = 'next' type='button' class='button'>Next -> </button>"
                            document.getElementById("results").innerHTML = html; 
                            last_id1 = docs[docs.length-1]['_id']
                        }
                            
                        
                    });
                }else if(prev){
                    db.collection('gene').find({"$and":[{'_id':{"$lt":last_id1}},arg1]}).limit(10).execute().then(docs => {
                        var html;
                        if(docs.length == 0){
                            $('#results').html("<div class = 'alert alert-warning' role = 'alert'> <strong> No results left</strong></div>")
                        }else{
                        html =  createDynamicTable(docs) +"<button id ='prev' type='button' class='button'> &lt;- Previous</button> <button id = 'next' type='button' class='button'>Next -> </button>"
                        document.getElementById("results").innerHTML = html; 
                        last_id1 = docs[docs.length-1]['_id']
                        }
                    });
                }
            }
        
        
            //helper functions for name query
            function queryResultsName(arg2){
                $('#results').html("<img src = 'loading.gif' alt = 'Loading...'>")
                
                clientPromise.then(stitchClient =>{
                    client = stitchClient;
                    db = client.service('mongodb', 'mongodb-atlas').db('data');
                    
                    return client.login().then(queryName(arg2))
                });
            }
            var nameInput;
            var last_id2 = null;
            function queryName(arg2){
                
                nameInput = geneInputName;       
                arg2 = arg2.length > 0 ? { $and: arg2 } : {};
                
                //Pagination for name query
                // if(last_id2 === null){
                //     db.collection('gene').find(arg2).limit(1).execute().then(docs2 => {
                        
                //         analyzeData(docs2) 
                //         last_id2 = docs2[docs2.length-1]['_id'] 
                        
                        
                //     });
                // }else{
                //     db.collection('gene').find({"$and":[{'_id':{"$gt":last_id2}},arg2]}).limit(1).execute().then(docs2 => {
        
                //         analyzeData(docs2) 
                //         last_id2 = docs2[docs2.length-1]['_id'] 
        
                //     });
                // }

                db.collection('gene').find(arg2).limit(1).execute().then(docs2 => {
                    
                     analyzeData(docs2) 
                     //last_id2 = docs2[docs2.length-1]['_id'] 
                    
                    
                });
                $('#results').html("")
        
            }
        
            var appended = false;
            //pagination event handlers (next&prev buttons)
            $('#results').on("click", "#next", function(){
                if(queryArray2.length === 0){
                    queryResultsChr(queryArray, false)
                }else if(queryArray.length === 0){
                    if(appended){
                        return;
                    }
                    
                    //pagination not necessary for Gene name search
                    $('#results').append('<b> Only one gene for each name')
                    appended = true;
                }
                
            })
        
            
            $('#results').on("click", "#prev", function(){
                if(queryArray2.length === 0){
                    queryResultsChr(queryArray, true)
                }else if (queryArray.length === 0){
                    if(appended){
                        return;
                    }
                   
                    //pagination not necessary for Gene name search
                    $('#results').append('<b> Only one gene for each name')
                    appended = true;
                }
            })
    
            // $('li').click(function(e){
            //     console.log('tab clicked')
            //     var tabClicked = e.target.id;
            //     if(tabClicked === 'geneNameTab'){
            //         //TODO delete info from chr region query selectors and vice versa for genename
            //         $('#chrDropdown').val("-");
            //         $('#startChr').val("");
            //         $('#endChr').val("");
            //     }else if (tabClicked === 'chrRegionTab'){
            //         $('#gene').val("");
            //     }
            // })
        
        
            //autocomplete querying
            var names = [];
            var namesList = [];
            function queryResultsAuto(arg4){
                const clientPromise = stitch.StitchClientFactory.create('dataretrieval-vwdtg');
                clientPromise.then(stitchClient =>{
                    client = stitchClient;
                    db = client.service('mongodb', 'mongodb-atlas').db('data');
                    return client.login().then(queryAuto(arg4))
                });
            }
            function queryAuto(arg4){
                
                arg4.push(orgDict)
                arg4 = arg4.length > 0 ? { $and: arg4 } : {};
                
                db.collection('gene').find(arg4, {"name":1, "_id" : 0}).execute().then(docs => {    
                    names = docs;
                    for(var i in names){
                        
                        namesList.push(names[i]["name"])
                    }
                    if(namesList.length == 0){
                        console.log("list returned size 0, query didn't return anything")
                    }else{
                    console.log('names list for autocomplete ready.')
                    }
                    return namesList;
                });
            }
            //Setup autocomplete in gene dropdown
            $("#gene").autocomplete({ //pause auto for first 2 chars, implement scroll bar for list
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(namesList, request.term);
            
                    response(results.slice(0, 20)); //show only 20 in the list at a time
                    autoFocus:true;
                    delay: 600; //600 milliseconds
                    minLength: 3; //minimum length of inputted chars before search begins
                }
            });
            
            
            /**
             * Sets up dropdown for chromosome numbers. 
             * @param {int} numChr Number of chromosomes for the given organism
             * @param {boolean} sexChr True if organism has sex chromosomes
             */
            function buildChrDropdown(numChr, sexChr){
                var select = "<select class='inline' id = 'chrDropdown' width = '60' style='width: 60px' >";
                if(numChr === 1){
                    select += "<option val = 'chr'>chr</option>"
                }else{
                    for (i=0;i<=numChr;i++){
                        if(i == 0){
                            select += "<option val = 'chr'>-</option>";
                        }else{
                            select += '<option val=' + i + '>' + i + '</option>';
                        }
                    }
                }
                if(sexChr){
                    select += "<option val = 'x'> X </option>"
                    select += "<option val = 'y'> Y </option>"
                }
                select+='</select>'
                $('#chrDropDiv').html(select);
            }
    
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
        
            //Event handler for clicking on organism image
            $(".thumbnail").click(function(e){
                $(".thumbnail").css("border-color", "")
                var org = e.target.id
                switch(org){ 
                    case 'Human':
                        orgDict.organism = 'human'
                        $('#organismName').html('Organism: <b>' + org + "</b>") 
                        buildChrDropdown(22, true)
                        $('#'+org).css({'border-style':'solid', 'border-color':'#32CD32'})
                        break;
                    case 'Mouse':
                        orgDict.organism = 'mouse'
                        buildChrDropdown(19, true)
                        $('#organismName').html('Organism: <b>' + org + "</b>")                 
                        $('#'+org).css({'border-style':'solid', 'border-color':'#32CD32'})     
                        break;
                    case 'Arabidopsis':
                        orgDict.organism = 'arabidopsis'
                        buildChrDropdown(5, false)
                        $('#organismName').html('Organism: <b>' + org + "</b>")                 
                        $('#'+org).css({'border-style':'solid', 'border-color':'#32CD32'})     
                        break;
                    case 'Ecoli':
                        orgDict.organism = 'ecoli'
                        buildChrDropdown(1, false)
                        $('#organismName').html('Organism: <b>' + org + "</b>")                 
                        $('#'+org).css({'border-style':'solid', 'border-color':'#32CD32'})                
                        break;
        
                }
            })
        
        
        
            //CHANGE handlers for input fields
            $('#startChr').change(function(){
                if($('#startChr').val() != ''){
                    inputStartChr = $('#startChr').val();
                    $('#startChr').removeClass('ui-state-error ui-corner-all');
                }
                last_id1 = null
            })
        
            $('#endChr').change(function(){
                if($('#endChr').val() != ''){
                    inputEndChr = $('#endChr').val();
                
                    $('#endChr').removeClass('ui-state-error ui-corner-all');
                }
                last_id1 = null;
            })
        
            $('#chrDropdown').change(function(){
                if($('#chrDropdown').val() != '-'){
                    $('#chrDropdown').removeClass('ui-state-error ui-corner-all');
                }
                last_id1 = null;
            })
        
            $('#gene').change(function(){
                if($('#gene').val().length != 0){
                    $('#gene').removeClass('ui-state-error ui-corner-all');
                }
                last_id2 = null;
            })
        
        
            //event handlers for query (submit button and 'enter' press)
            $('#submitChr').click(submitChrMethod);
            $(document).keypress(function(e){
                if(e.which === 13){
                    var tabId = $('div[id="tabsList"] ul .ui-tabs-active').attr("id")
                    if(tabId === 'geneNameTab'){
                        submitGeneName();
                        return;
                    }else if (tabId === 'chrRegionTab'){
                        submitChrMethod();
                    }
                
                }
            })
        
            function submitChrMethod(){
                //queryArray = [];
                inputEndChr = $('#endChr').val();
                $('#plots div').empty();
                
                if($('#chrDropdown').val() === '-'){
                    //change div color to show where to select
                    $('#chrDropdown').addClass('ui-state-error ui-corner-all');
                    console.log('enter chromsome');
                }else{
        
                    var val = 'chr'+ $('#chrDropdown').val();
                    //queryArray.push({'chr': val})
                    
                }
        
                if($('#startChr').val().length != 0 && $('#endChr').val().length != 0){
                    if($('#chrDropdown').val() != '-'){
                        console.log('input end chr: '  + inputEndChr)
                        // /queryArray.push({"$and":[{"start":{"$gte": inputStartChr}},{"end":{"$lte": inputEndChr}}, orgDict, {'chr': val}]})
                        //queryArray.push(orgDict)
                        //console.log("queryArray " + JSON.stringify(queryArray))
                        //queryResultsChr(queryArray);
                        queryResultsChr({"$and":[{"start":{"$gte": inputStartChr}},{"end":{"$lte": inputEndChr}}, orgDict, {'chr': val}]})
                    }
                }else{
                    //change div color to show to select both start and end
                    console.log('input start and end')
                    if($('#startChr').val().length== 0){
                        $('#startChr').addClass('ui-state-error ui-corner-all');
                    }
                    if($('#endChr').val().length == 0){
                        $('#endChr').addClass('ui-state-error ui-corner-all');
                    }
                }
                queryArray2 = [];
                
            }
            //attach event handler to submit button in gene search tab
            $('#submitGeneName').click(submitGeneName);
    
            //submit event handler for gene name query
            function submitGeneName(){
                queryArray2 = [];
                console.log($("#gene").val())
                if($('#gene').val().length != 0){
                    geneInputName = document.getElementById('gene').value;
                    queryArray2.push({'name':document.getElementById('gene').value})
                    queryArray2.push(orgDict)
        
                    queryResultsName(queryArray2);
                }else{
                    
                    $('#gene').addClass('ui-state-error ui-corner-all');
                } 
                queryArray = [];
                
            }
            //Hover event handler for organism images 
            $('.thumbnail').hover(function(e){
                $('#nameHover').html('Select <b>' + this.id + "</b>") 
            }, function(){
                $('#nameHover').empty();
            })
           
            /**
             * Given the results from a query, the method will build a table with embedded click 
             * event handlers for each row (to enable plots to be shown)
             * @param {*} objArray Query results stored here
             */
            function createDynamicTable(objArray) {
                var array = objArray;
            
                var str = '<table class="table-striped" role = "grid"> <thead>';
                str += '<tr>';
                //create table headers
                for (var index in array[0]) {
                    if((index.localeCompare("_id") == 0) || (index.localeCompare("number")==0)|| (index.localeCompare("chr")==0)){
                        //skip these columns
                    }else{
                        str += '<th scope="col" class = "rotate"><div><span>' + index + '</span></div></th>';
                    }
                }
                
                str += '</tr></thead>';
                str += "<tbody>";
                for (var i = 0; i < array.length; i++) {
                    str += "<tr class = 'dynTr' tabindex = '0' id = 'dataRow_" + i +"'> ";
                
                    for (var index in array[i]) {
                      
                        if((index.localeCompare("_id") == 0) || (index.localeCompare("number")==0)|| (index.startsWith("chr")==true)){
                        //skip these columns
                        }else{
                            if(!isNaN(parseFloat(array[i][index])) && isFinite(array[i][index])){
                                 var temp  = parseFloat(array[i][index])
                                 array[i][index] = Math.round(temp * 100) / 100
                               
                            }
                            
                        str += '<td>' + array[i][index] + '</td>';
                        }
                    }
                    $(document).on("click", "#dataRow_"  + i, function(){
                        var arrayIndex = this.id.slice(-1)
                        analyzeData([array[arrayIndex]])                
                    })
        
                    str += '</tr>';
                }
                str += '</tbody>'
                str += '</table>';
                return str;
            }
            
        
        //CODE FOR EXPERIMENT PLOTS BELOW
        
            /**
             * Plots experiment X's data to 'plots' div
             * @param {[]} columnNames array of column names 
             * @param {[{}]} data Data to plot 
             */
            function plotExpX(columnNames, data){
                $('#plotsX').html("");
                //column names should come from sample sheet
                graphData = [{x:columnNames, y:data, type:'bar'}];
                var layout = {
                    autosize: false,
                    width: 500,
                    height: 500,
                    margin: {
                        l: 50,
                        r: 50,
                        b: 100,
                        t: 100,
                        pad: 4
                    },
                    title: "Experiment X"
                    };
                
                Plotly.newPlot('plotsX', graphData,layout)
                var elmnt = document.getElementById("plots");
                elmnt.scrollIntoView(false,{
                    behavior: 'smooth'
                });
            }
        
            /**
             * Plots experiment Y's data to plots div
             * @param {[]} columnNames array of column titles
             * @param {[{}]} data Data to plot
             */
            function plotExpY(columnNames, data){
                $('#plotsY').html("");
                //column names should come from sample sheet
                graphData = [{x:columnNames, y:data, type:'scatter'}];
                var layout = {
                    autosize: false,
                    width: 500,
                    height: 500,
                    margin: {
                        l: 50,
                        r: 50,
                        b: 100,
                        t: 100,
                        pad: 4
                    },
                    title: "Experiment Y"
                    };
                Plotly.newPlot('plotsY', graphData,layout)
                var elmnt = document.getElementById("plots");
                elmnt.scrollIntoView();
            }
            /**
             * Get sample sheet to inform script of how to plot depending on experiment, stored in the 
             */
            
            function getSampleSheet(){
                const clientPromise = stitch.StitchClientFactory.create('dataretrieval-vwdtg');        
                clientPromise.then(stitchClient =>{
                    client = stitchClient;
                    db = client.service('mongodb', 'mongodb-atlas').db('data');
                    client.login()
                    db.collection('sample').find({}).execute().then(result => {
                        sampleSheet = result;
                        
                    })
                }); 
            }
        
        
            /**
             * Function to compare the sampleSheet queried to data provided
             * in order to see where to call each experiment function
             * 
             * @param {[{}]} data to be analyzed, from query functions
             */
            function analyzeData(data){
                
                //first get all unique experiment names from sample sheet and create their respective arrays
                for(var i = 0; i < sampleSheet.length; i++){
                    //finished looking at each experiment
                    if(sampleSheet[i]['Experiment']=== undefined){
                        break;
                    }
                    if(!experiments.includes(sampleSheet[i]['Experiment'])){
                        var exp = sampleSheet[i]['Experiment']
                        experiments.push(exp)
                        var expCols = 'exp' + exp + 'Columns'
                        var expData = 'exp' + exp + 'Data'
                        window[expCols] = [];
                        window[expData] = [];
                        var func =sampleSheet[i]['Function']
                        functions.push({[exp]:func})
                        var plotsDiv = document.getElementById('plots')
                        var newDiv = document.createElement("div")
                        newDiv.class = "columns"
                        newDiv.id = 'plots'+exp
                        plotsDiv.appendChild(newDiv)
                                          
                    }
        
                }
                // var oddColor = [];
                // var evenColor = [];
        
                //organize columns for each experiment
                var count = 0;
                for (var index in data[0]) {
                    //skip extra columns, index is column name
                    if(count < 8){
                        count += 1;
                    }else{
                        for(var i = 0; i<sampleSheet.length; i++){
                            if(index === sampleSheet[i]['Sample']){
                                var experiment = sampleSheet[i]['Experiment']
        
                                for(var j =0; j<experiments.length; j++){
                                    if(experiment === experiments[j]){
                                        //push column name to its respective array
                                        var varName = 'exp' + experiment + 'Columns'
                                        window[varName].push(index)
                                    }
                                }
                            }
                            
                        }
                        //get columns organized for alternating bar colors b/w TS and NTS, will be implemeneted later
                        // if(index.substr(index.length-3) === 'NTS'){
                        //     oddColor.push(index)
                        // }else if(index.substr(index.length-3) === '_TS'){
                        //     evenColor.push(index)
                        // }
                    }
                }
                //get corresponding data, skip first 8 columns
                for (var i = 0; i < data.length; i++) {
                    var count = 0;            
                    for (var index in data[i]) {
                        if(count < 8){
                            count +=1;
                        }else{ 
                            //index is each column name
                            for(var j = 0; j<sampleSheet.length; j++){
                                if(index === sampleSheet[j]['Sample'] ){
                                    var experiment = sampleSheet[j]['Experiment']
                                    for(var k = 0; k<experiments.length; k++){
                                        if(experiment === experiments[k]){
                                            //push column name to its respective array
                                            var varName = 'exp' + experiment + 'Data'
                                            var colName = 'exp'+experiment+'Columns'
                                            window[varName].push(data[i][index])
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                }
            
                //call plotting functions
                for(var l = 0; l < experiments.length; l++){
                    
                    var cols = 'exp'+experiments[l]+'Columns'
                    var data = 'exp'+experiments[l]+'Data'
                    var func = functions[l][experiments[l]]
                    //make function name always be lowercase (in case it was capitalized in samplesheet)
                    func = func.charAt(0).toLowerCase() + func.slice(1);
                    var funcToCall = eval(func)
                    funcToCall(window[cols], window[data]);
                    //empty window vars for next data row
                    window[cols] = [];
                    window[data] = [];
                }
            }
        })