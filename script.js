//Script for Sancar Lab database project, written by Yashar Asgari
jQuery(document).ready(function(){

    //first, create list of gene names for autocomplete
    queryResultsAuto([{}])

    //setting up dropdown for chromosomes. changes depending on organism selected
    buildChrDropdown(21);

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
    let client;
    let db;
    var returned;
    var geneInputName;
    
    //page loads this by default, can change later
    orgDict.organism = 'mouse'


    //sets up server connection and chromosome placement query method
    function queryResultsChr(arg1){
        clientPromise.then(stitchClient =>{
            client = stitchClient;
            db = client.service('mongodb', 'mongodb-atlas').db('data');
          
            return client.login().then(queryChr(arg1))
        });
    }
    function queryChr(arg1){
        
        arg1.push(orgDict)
        arg1 = arg1.length > 0 ? { $and: arg1 } : {};
        
        db.collection('gene').find(arg1).limit(10).execute().then(docs => {
            var html = createDynamicTable(docs)
               document.getElementById("results").innerHTML = html; 
               console.log(docs)
               returned = docs;
        
        });
    }


    //helper functions for name query
    function queryResultsName(arg2){
        clientPromise.then(stitchClient =>{
            client = stitchClient;
            db = client.service('mongodb', 'mongodb-atlas').db('data');
          
            return client.login().then(queryName(arg2))
        });
    }
    var nameInput;
    function queryName(arg2){
        
        nameInput = geneInputName; //working        
        arg2.push(orgDict)
        arg2 = arg2.length > 0 ? { $and: arg2 } : {};
        console.log('arg2 begin = ' + JSON.stringify(arg2)) //working
        
        db.collection('gene').find(arg2).limit(10).execute().then(docs2 => {
            var html;
            
            // //if no results are found,  regex search
            // if(docs2.length === 0){
            //     var inputString = '^' + nameInput
            //     //var rgx = new RegExp(inputString, "i") //do toString() in query to show up in console
                
            //     var arg3 = {"$and":[{"name":{"$regex": inputString, "$options":"i"}}, {"organism": selectedOrganism}]}
            //     console.log('arg3 in if = ' + JSON.stringify(arg3))
            //     db.collection('gene').find(arg3).limit(10).execute().then(docs3=>{
            //         html = createDynamicTable(docs3)
            //         //html = docs3.map(c => "<div> <pre>" + JSON.stringify(c, null, 4) + "</pre></div> <br>").join("");
            //     })
            // }else{
            //     //console.log('docs2'  + JSON.parse(docs2[0]))
                
            //     console.log("returned = " + JSON.stringify(docs2))
            //     //html = docs2.map(c => "<div> <pre>" + JSON.stringify(c, null, 4) + "</pre></div> <br>").join("");
            //     html = createDynamicTable(docs2)
                
            // } 
            html = createDynamicTable(docs2)  
            document.getElementById("results").innerHTML = html;             
        });
    }



    //autocomplete tryout
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
                //console.log(names[i]["name"])
                namesList.push(names[i]["name"])
            }
            console.log('names list for autocomplete ready.')
            return namesList;
        });
    }

    $("#gene").autocomplete({ //pause auto for first 2 chars, implement scroll bar for list
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(namesList, request.term);
    
            response(results.slice(0, 20)); //show only 20 in the list at a time
            autoFocus:true;
            delay: 600; //600 milliseconds
            minLength: 3; //min length of inputted chars before search begins
        }
    });
   
  

    function buildChrDropdown(numChr){
    //setting up dropdown for chromosomes- changes depending on organism selected
        var select = "* <b>Chromosome: </b><select id = 'chrDropdown' >";
        for (i=0;i<=numChr-2;i++){
            if(i == 0){
                select += "<option val = 'chr'>-</option>";
            }else{
                select += '<option val=' + i + '>' + i + '</option>';
            }
        }
        select += "<option val = 'x'> X </option>"
        select += "<option val = 'y'> Y </option>"
        select+='</select>'
        $('#chrDropDiv').html(select);
    }


    //adjusts query for user changes in organism dropdown, need to add other organisms
    $('#chooseOrg').change(function(){
        console.log('chooseOrg selected')
        switch($('#chooseOrg').val()){
            case 'mouse':
                orgDict.organism = 'mouse'
                buildChrDropdown(21)
            case 'human':
                orgDict.organism = 'human'
                buildChrDropdown(24)
        }
    })


    //CHANGE handlers for input fields
    $('#startChr').change(function(){
        if($('#startChr').val() != ''){
            inputStartChr = $('#startChr').val();
            console.log('inputStartChr changed')
            //$('#startChr').css("background-color", "")
            $('#startChr').removeClass('ui-state-error ui-corner-all');
        }
    })

    $('#endChr').change(function(){
        if($('#endChr').val() != ''){
            inputEndChr = $('#endChr').val();
            console.log('inputEndChr changed')
            //$('#endChr').css("background-color", "")
            $('#endChr').removeClass('ui-state-error ui-corner-all');
            
        }
    })

    $('#chrDropdown').change(function(){
        if($('#chrDropdown').val() != '-'){
            //$('#chrDropDiv').css("color", "")
            $('#chrDropdown').removeClass('ui-state-error ui-corner-all');
        }
    })

    $('#gene').change(function(){
        if($('#gene').val().length != 0){
            //$('#gene').css("background-color", "")
            $('#gene').removeClass('ui-state-error ui-corner-all');
        }
    })


    //submit button event handler for chromosome placement query
    $('#submitChr').click(function(){
        queryArray = [];
        console.log('clicked submit')
        console.log("chrDropdown val = " + $('#chrDropdown').val())
        console.log("startChr val = " + $('#startChr').val())
        console.log("endChr val = " + $('#endChr').val())
        
        //change of gif loading
        
        if($('#chrDropdown').val() === '-'){
            //change div color to show where to select
            //$("#chrDropDiv").css("color","#DF0E0E");
            $('#chrDropdown').addClass('ui-state-error ui-corner-all');
            console.log('enter chromsome');
        }else{

            var val = 'chr'+ $('#chrDropdown').val();
            queryArray.push({'chr': val})
            
        }

        if($('#startChr').val().length != 0 && $('#endChr').val().length != 0){
            
            queryArray.push({"start":{"$gte": inputStartChr, "$lte": inputEndChr}})
            queryArray.push({"end":{"$gte":inputStartChr, "$lte": inputEndChr}})
            queryResultsChr(queryArray);
        }else{
            //change div color to show to select both start and end
            console.log('input start and end')
            if($('#startChr').val().length== 0){
                //$('#startChr').css("background-color", "yellow");
                $('#startChr').addClass('ui-state-error ui-corner-all');
            }
            if($('#endChr').val().length == 0){
                //$('#endChr').css("background-color", "yellow");
                $('#endChr').addClass('ui-state-error ui-corner-all');
            }
        }
        
    })

    //submit event handler for Name query
    $('#submitName').click(function(){
        queryArray2 = [];
        console.log($("#gene").val())
        if($('#gene').val().length != 0){
            console.log('gene field has input')
            geneInputName = document.getElementById('gene').value;
            queryArray2.push({'name':document.getElementById('gene').value})   //exact search
            queryResultsName(queryArray2);
        }else{
            console.log('enter gene name') //add div color change here
            //$('#gene').css('background-color', "yellow")
            $('#gene').addClass('ui-state-error ui-corner-all');
        } 
    })

    function createDynamicTable(objArray) {
        var array = objArray;
    
        var str = '<table class="lightPro">';
        str += '<tr>';
        for (var index in array[0]) {
            str += '<th scope="col">' + index + '</th>';
        }
        str += '</tr>';
        str += '<tbody>';
        for (var i = 0; i < array.length; i++) {
            str += (i % 2 == 0) ? '<tr class="alt">' : '<tr>';
            for (var index in array[i]) {
                str += '<td>' + array[i][index] + '</td>';
            }
            str += '</tr>';
        }
        str += '</tbody>'
        str += '</table>';
        return str;
        }
    
})
