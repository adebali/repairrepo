jQuery(document).ready(function(){

    //setting up dropdown for chromosomes will have to change depending on organism
    var select = "<b>Chromosome: </b><select id = 'chrDropdown' >";
    for (i=0;i<=21;i++){
        if(i == 0){
            select += "<option val = ' '> </option>";
        }else{
            select += '<option val=' + i + '>' + i + '</option>';
        }
    }
    select+='</select>'
    $('#chrSelector').html(select);


    //prep server connection
    const clientPromise = stitch.StitchClientFactory.create('dataretrieval-vwdtg');
    //var queryDict = {}; //arg for pymongo find(query) function
    var selectedOrganism = 'mouse';
    var orgDict = {};
    let queryArray = [];
    var inputStartChr;
    var inputEndChr;
    let client;
    let db;
    
    //page loads this by default, can change lateer
    orgDict.organism = 'mouse'


    //sets up server connection and query method
    function queryResults(){
        clientPromise.then(stitchClient =>{
            client = stitchClient;
            db = client.service('mongodb', 'mongodb-atlas').db('data');
          
            return client.login().then(query)
        });
    }
    function query(){
        
        queryArray.push(orgDict)
        queryArray = queryArray.length > 0 ? { $and: queryArray } : {};

        db.collection('gene').find(queryArray).execute().then(docs => {
          var html = docs.map(c => "<div> <pre>" + JSON.stringify(c, null, 4) + "</pre></div> <br>").join("");
               document.getElementById("results").innerHTML = html; 
        queryArray.length = [];           
        });
    }

    function buildChrDropdown(numChr){
    //setting up dropdown for chromosomes- changes depending on organism selected
        var select = "<b>Chromosome: </b><select id = 'chrDropdown' >";
        for (i=0;i<=numChr;i++){
            if(i == 0){
                select += "<option val = 'null'> </option>";
            }else{
                select += '<option val=' + i + '>' + i + '</option>';
            }
        }
        select+='</select>'
        $('#chrSelector').html(select);
    }

    $('#chooseOrg').change(function(){
        console.log('chooseOrg selected')
        switch($('#chooseOrg').val()){
            case 'mouse':
                orgDict.organism = 'mouse'
                buildChrDropdown(21)
            case 'human':
                orgDict.organism = 'human'
                buildChrDropdown(23)
        }
    })

    $('#chrDropdown').change(function(){
        console.log('chrDropdown has input');
        
        var val = 'chr' + $('#chrDropdown').val();

        queryArray.push({'chr':val})
    })

    $('#startChr').change(function(){
        if($('#startChr').val() != ''){
            inputStartChr = $('#startChr').val();
        }
    })

    $('#endChr').change(function(){
        if($('#endChr').val() != ''){
            inputEndChr = $('#endChr').val();
        }
    })

    $('#submit').click(function(){
        console.log('clicked submit')

        if($('#gene').val().length != 0){

           console.log('gene field has input')
           queryArray.push({'name':document.getElementById('gene').value})           
        } 
        if($('#startChr').val() != '' || $('#endChr').val() != ''){
            if($('#startChr').val() === '' || $('#endChr').val() === ''){
                alert("Input a range from 'start' to 'end' ")
            }else{
                queryArray.push({"start":{"$gte": inputStartChr, "$lte": inputEndChr}})
                queryArray.push({"end":{"$gte":inputStartChr, "$lte": inputEndChr}})
            }
        }
        
        $('#results').html('Querying the database...')
        queryResults();
    })
    
})
