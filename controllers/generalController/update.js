var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('*', function(request, response, next){
	if(request.cookies['email'] == null){
		response.redirect('/');
	}else{
		next();
	}
});

router.get('/home', function(request, response){
    console.log('home page requested from update page');
    response.render('userViews/home');
});

router.post('/update/:email', function(request, response){
    console.log('update page post request');
    var user = {
        email: request.params.email,
        username: request.body.username,
        password: request.body.password,
        phone: request.body.phone
    };
    userModel.update(user, function(status){
        if(status){
            console.log('success');
            response.redirect('/userViews/home');
        }else{
            console.log('error');
            response.redirect('/userViews/home'+request.params.email);
        }
    });
});

module.exports = router;