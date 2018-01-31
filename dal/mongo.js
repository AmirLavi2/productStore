const mongoose = require('mongoose');
const categorySchema=require('../models/category');
const orderSchema=require('../models/order');
const productSchema=require('../models/product');
const roleSchema=require('../models/role');
const userSchema=require('../models/user');
const Role = mongoose.model('Role', roleSchema);
const User = mongoose.model('User', userSchema);

// ES6 Promises
mongoose.Promise = global.Promise;

module.exports={
	login:function(req, res){
		let email=req.body.email;
		let password=req.body.password;

		User.findOne({email:email,password:password}, (err,user)=>{
			if(err) throw err;
			console.log('user found');
			console.log(user);
			return res.json(user);
		});
	},
	register:function(req, res){
		let user=req.body;
		let u= new User(user);

		u.save((err,user)=>{
			if(err) throw err;
			console.log(user);
			return res.json(user);
		});

	}
};