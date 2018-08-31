var data = require("../data.json");

exports.addUser = function(req, res) {    
	// Your code goes here
    var name = req.query.name;
    var password = req.query.password;

    var newUser = {
        "name": name,
        "password": password,
    };
    console.log(newUser);
    data.users.push(newUser);
    res.render("signUp.handlebars",data);
  };