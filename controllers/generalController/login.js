var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	console.log('landing page (index.ejs) requested from login');
	response.render('index');
});

router.get('/signup', function(request, response){
    console.log('signup page requested from login');
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
            response.cookie('email', request.body.email);
            var email = request.cookies['email'];
            console.log('successfull login with ', email);
            response.redirect('/userViews/home');
        }
        else{
			response.send('invalid email/password');
		}
	});
});

module.exports = router;