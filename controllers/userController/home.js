var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

console.log('home.js');
router.get('*', function(request, response, next){
	if(request.cookies['email'] == null){
		response.redirect('/');
	}else{
		next();
	}
});

router.get('/update/:email', function(request, response){
	console.log('update page requested from home');
	userModel.getByEmail(request.params.email, function(result){
		response.render('userViews/update', {user: result});
	});
});

router.get('/delete/:email', function(request, response){
	console.log('delete page requested from home');
	var user = {
        email: request.params.email
    };
	userModel.delete(user, function(status){
        if(status){
            console.log('successfully delete');
            response.redirect('/logout');
        }else{
            console.log('error in delete');
            response.redirect('/userViews/home/');
        }
    });
});

router.get('/', function(request, response){
	if(request.cookies['email'] != null){
		userModel.getByEmail(request.cookies['email'], function(result){
			response.render('userViews/home', {user: result});
		});
	}else{
		response.redirect('/');
	}
});

module.exports = router;