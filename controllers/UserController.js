var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var mongoose = require("mongoose");

var userController = function (nav) {

	// Connect to DB
	mongoose.connect('mongodb://localhost:27017/inspect');

	var sigUp = function (req, res) {
		User.findOne({
			email: req.body.email,
			password: req.body.password
		}, function (err, user) {
			if (err) {
				res.json({
					type: false,
					data: "Error occured: " + err
				});
			} else {
				if (user) {
					res.json({
						type: false,
						data: "User already exists!"
					});
				} else {
					var userModel = new User();
					userModel.email = req.body.email;
					userModel.password = req.body.password;
					userModel.username = req.body.username;
					userModel.save(function (err, user) {
						if (err) {
							res.status(400).json({
								type: false,
								message: err.errors
							});
						} else {
							user.token = jwt.sign(user, 'normal');
							user.save(function (err, user1) {
								res.json({
									type: true,
									user: {
										username: user1.username,
										email: user1.email
									},
									token: user1.token
								});
							});
						}
					})
				}
			}
		});
	};
	var login = function (req, res) {
		User.findOne({
			email: req.body.email,
			password: req.body.password
		}, function (err, user) {
			if (err) {
				res.json({
					type: false,
					data: "Error occured: " + err
				});
			} else {
				if (user) {
					res.json({
						type: true,
						user: {
							email: user.email,
							username: user.username
						},
						token: user.token
					});
				} else {
					res.json({
						type: false,
						data: "Incorrect email/password"
					});
				}
			}
		});
	};


	return {
		login: login,
		sigUp: sigUp
	}
};

module.exports = userController();