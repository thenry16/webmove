'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
   initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    console.log("here1");
    $("#searchButton").click(function(e){
        console.log("here2");
        gtag('event', 'click', {
            'event_category': 'testBtn',
            'event_label': 'user clicked tester',
            'value': 1
        });
    });
}

function clearTextStart()  
{
    document.getElementById('origin-input').value = "";
}  

function clearTextDest()  
{
    document.getElementById('destination-input').value = "";
}  