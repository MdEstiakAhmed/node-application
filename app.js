//declaration
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

var index = require('./controllers/index');
var logout = require('./controllers/generalController/logout');
var login = require('./controllers/generalController/login');
var signup = require('./controllers/generalController/signup');
var home = require('./controllers/userController/home');
var update = require('./controllers/generalController/update');

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('static'));
app.use(cookieParser());

app.use('/', index);    //for index to index
app.use('/', login);    //for login ro index
app.use('/', signup);   //for signup to index
app.use('/logout', logout);
app.use('/generalViews', index);    //for index to login and signup
app.use('/generalViews', login);    //for signup to login
app.use('/generalViews', signup);   //for login to signup
app.use('/generalViews/login', login);  //for login form submit to login.js
app.use('/userViews/home', home);
app.use('/userViews', update);
app.use('/userViews', home);

//server startup
var serverPort=3000;
app.listen(serverPort, function(){
    console.log("node-application server started at", serverPort);
    
});