var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var Property = require('../models/Property');
var jwt = require('jsonwebtoken');
var mongoose = require("mongoose");

var userController = function (nav) {

    // Connect to DB
    mongoose.connect('mongodb://localhost:27017/inspect');


    var get = function (req, res) {
        Property.find({}, function (err, propertys) {
            if (err) {
                res.status(400).json({
                    type: false,
                    message: err.errors
                });
            } else {
                res.json({
                    type: true,
                    propertys: property
                });
            }
        });
    }

    var getOne = function (req, res) {
        Property.findById(req.body._id, function (err, property) {
            if (err) {
                res.status(400).json({
                    type: false,
                    message: err.errors
                });
            } else {
                res.json({
                    type: true,
                    property: property
                });
            }
        });
    }

    var save = function (req, res) {

        var propertyModel = new Property({});
        propertyModel.save(function (err, property) {
            if (err) {
                res.status(400).json({
                    type: false,
                    message: err.errors
                });
            } else {
                property.save(function (err, property1) {
                    res.json({
                        type: true,
                        property: property1
                    });
                });
            }
        });
    }


    return {
        get: get,
        save: save
    }

}