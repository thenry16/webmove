/*
 * GET home page.
 */
exports.view = function(req, res){
    var data = require("../safetyTips.json");
    var random = Math.floor((Math.random()*16));
    var tip = data.tips[random];
    console.log(tip);
    res.render('index', {
        'tip':tip,
        'viewAlt' : false
    });
};

exports.viewAlt = function(req, res){
    var data = require("../safetyTips.json");
    var random = Math.floor((Math.random()*16));
    var tip = data.tips[random];
    console.log(tip);
    res.render('index', {
        'tip':tip,
        'viewAlt' : true
    });
};


