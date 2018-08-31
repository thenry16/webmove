/**
 * Module dependencies.
 */

var express = require('express');
    //require the body-parser nodejs module
var bodyParser = require('body-parser');

var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var safePath = require('./routes/SafePath');
var routing = require('./routes/Routing');
var arrival = require('./routes/Arrival');
var login = require('./routes/login');
// var add = require('./routes/add');
var signup = require('./routes/signUp');
var faq = require('./routes/FAQ');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// Add routes here
// app.get('/', index.view);
// app.post('/safePath', safePath.view);
// app.get('/routing/:start/:destination', routing.view);
// app.get('/arrival', arrival.view);
// app.get('/login', login.view);

app.get('/index', index.view);
app.get('/safePath', safePath.view);
app.post('/safePath', safePath.view);
app.get('/indexAlt', index.viewAlt);
app.get('/safeAlt', safePath.viewAlt);
app.get('/routing/:start/:destination', routing.view);
app.get('/arrival', arrival.view);
app.get('/', login.view);
app.get('/FrequentlyAskedQuestions', faq.view);
// app.get('/add',add.addUser);
app.get('/signup',signup.view);

// app.get('/faq',faq.view);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
