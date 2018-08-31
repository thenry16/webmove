
var user = require('../user.json');

exports.view = function(req, res){
	var start = req.body.start;
    var destination = req.body.destination;
     if(start && destination){
        res.render('safePath', {
            'mapView': true,
            'message': '',
            'start': start,
            'destination' : destination,
          'viewAlt': false
        });
    }
    else if(start){
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid destination',
            'start': start,
            'destination' : '',
          'viewAlt': false
        })
    }
    else if(destination){
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid starting location',
            'start': '',
            'destination': destination,
          'viewAlt': false
        })
    } else{
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid  starting location and destination',
            'start': '',
            'destination': '',
          'viewAlt': false
        })
    }
};


exports.viewAlt = function(req, res){
    var start = req.body.start;
    var destination = req.body.destination;
   if(start && destination){
        res.render('safePath', {
            'mapView': true,
            'message': '',
            'start': start,
            'destination' : destination,
          'viewAlt': true
        });
    }
    else if(start){
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid destination',
            'start': start,
            'destination' : '',
          'viewAlt': true
        })
    }
    else if(destination){
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid starting location',
            'start': '',
            'destination': destination,
          'viewAlt': true
        })
    } else{
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid  starting location and destination',
            'start': '',
            'destination': '',
          'viewAlt': true
        })
    }
   
};


