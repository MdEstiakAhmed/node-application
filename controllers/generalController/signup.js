var express = require('express');
var userModel = require.main.require('./models/user-model');
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

router.post('/signup', function(request, response){
    console.log('signup page post request');
    var user = {
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        type: request.body.type,
        phone_number: request.body.phone_number,
        gender: request.body.gender,
        birthdate: request.body.birthdate,
        biography: request.body.biography,
        profile_picture: request.body.profile_picture
    };
    userModel.insert(user, function(status){
        if(status){
            console.log('successfully signup');
            response.cookie('email', request.body.email);
            var email = request.cookies['email'];
            console.log('successfull login with ', email);
            response.redirect('/userViews/home');
        }
        else{
            console.log('error');
            response.redirect('/generalViews/signup');
        }
    });
});

module.exports = router;