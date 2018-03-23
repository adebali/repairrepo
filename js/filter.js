$(document).ready(function() {
    $('#Bob').change( function() {
        $('tr').show();
        $('tr:not(:has(th)):not(:contains("Bob"))').hide();
    });
   
    $('#Jay').change( function() {
        $('tr').show();
        $('tr:not(:has(th)):not(:contains("Jay"))').hide();
    });
   
    $('#developer').change( function() {
        $('tr').show();
        $('tr:not(:has(th)):not(:contains("Developer"))').hide();
    });
   
    $('#itManager').change( function() {
        $('tr').show();
        $('tr:not(:has(th)):not(:contains("Manager"))').hide();
    });
});