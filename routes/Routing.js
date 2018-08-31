exports.view = function(req, res){
	var start = req.params.start;
    var destination = req.params.destination;
    console.log("route: %s %s COUCOU" , start, destination);
    res.render('routing', {
        'start': start,
        'destination' : destination
    });
};