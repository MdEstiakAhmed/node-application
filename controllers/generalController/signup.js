var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	console.log('landing page (index.ejs) requested from signup');
	response.render('index');
});

router.get('/login', function(request, response){
    console.log('login page requested from signup');
    response.render('generalViews/login');
});

router.get('/home', function(request, response){
    console.log('home page requested from signup');
    response.render('userViews/home');
});

module.exports = router;