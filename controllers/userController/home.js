var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

console.log('home.js');

router.get('/', function(request, response){

	if(request.cookies['email'] != null){
		userModel.getByUname(request.cookies['email'], function(result){
			response.render('userViews/home', {user: result});
		});
	}else{
		response.redirect('/');
	}
});

module.exports = router;