exports.view = function(req, res){
    var placeName = req.params.place;
    res.render('safePlaces', {
    'place': placeName,
    });
};