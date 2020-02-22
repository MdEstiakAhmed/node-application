var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from user where id="+id;
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM user_details where email='"+user.email+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname : function(email, callback){
		var sql = "select * from user_details where email='"+email+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into user .............";
		db.getResults(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update : function(user, callback){
		var sql = "update user set username='"+user.username+"', password='"+user.password+"', type='"+user.type+"' where id="+user.id;
		db.getResults(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete : function(user, callback){
		var sql = "Delete user  where id="+user.id;
		db.getResults(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}