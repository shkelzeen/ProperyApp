var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type:String,
		required: [true, 'User email is required']
	},
	password:{
		type: String,
		validate: {
			validator: function(v) {
				return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
			},
			message: 'Password is not a valid'
		},
		required: [true, 'User password is required']
	},
	username: {
		type:String,
		required: [true, 'Username is required']
	},
	created: Date,
	token: String
});

module.exports = mongoose.model('User', UserSchema);