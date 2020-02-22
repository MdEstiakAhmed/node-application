var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	console.log('landing page (index.ejs) requested');
	response.render('index');
});

router.get('/login', function(request, response){
    console.log('login page requested from index');
    response.render('generalViews/login');
});

router.get('/signup', function(request, response){
    console.log('signup page requested from index');
    response.render('generalViews/signup');
});

router.post('/', function(request, response){
    console.log('post request from login.ejs');
	var user ={
		email: request.body.email,
		password: request.body.password
	};
	userModel.validate(user, function(status){
	 	if(status){
			// response.cookie('email', request.body.email);
            // response.redirect('/home');
            response.send('all ok');
        }
        else{
			response.send('invalid email/password');
		}
	});
});

module.exports = router;