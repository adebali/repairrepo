jQuery(document).ready(function(){

    var select = '<b>Chromosome: </b><select>';
    for (i=1;i<=21;i++){
        select += '<option val=' + i + '>' + i + '</option>';
    }
    select+='</select>'
    $('#chrSelector').html(select);


    //prep server connection
    const clientPromise = stitch.StitchClientFactory.create('dataretrieval-vwdtg');
    let field; //value
    let column; //key
    let client;
    let db;
    
    function queryResults(){
        clientPromise.then(stitchClient =>{
            client = stitchClient;
            db = client.service('mongodb', 'mongodb-atlas').db('data');
          
            return client.login().then(query)
        });
    }
    function query(){
        console.log('in query method')
        db.collection('gene').find({"name": document.getElementById('gene').value}).limit(1000).execute().then(docs => {
          var html = docs.map(c => "<div>" + JSON.stringify(c, null, 4) + "</div> <br>").join("");
               document.getElementById("results").innerHTML = html;
        });
    }

    $('#submit').click(function(){
        console.log('clicked submit')
        


        queryResults();
    })
    
})
