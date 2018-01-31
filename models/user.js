const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema= new Schema({
	fname: String,
	lname: String,
	email: String,
	password: String,
	city: String,
	street: String,
	role: { type: String, default:'user'}
});

const User = mongoose.model('User', userSchema);

module.exports = User;