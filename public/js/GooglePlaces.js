$(document).ready(function () {
   google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
    var inputStart = document.getElementById('origin-input-path');
    var autocompleteStart = new google.maps.places.Autocomplete(inputStart);

    var inputDest = document.getElementById('destination-input-path');
    var autocompleteDest = new google.maps.places.Autocomplete(inputDest);
}