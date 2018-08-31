      function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        // var map = new google.maps.Map(document.getElementById('map'), {
        //   zoom: 18,
        //   center: {lat: 32.879736, lng: -117.235934}
        // });
        // directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('right-panel'));
        console.log("les citrons sont jaunes Geneviève")
        // var control = document.getElementById('floating-panel');
        // control.style.display = 'block';
        // map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
        calculateAndDisplayRoute(directionsService, directionsDisplay);

      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var start = document.getElementById('origin-input-route').value;
        var end = document.getElementById('destination-input-route').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }