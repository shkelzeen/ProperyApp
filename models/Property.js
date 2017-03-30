/**
 * Created by Shkelzen.Fejzullahu on 14/03/2017.
 */
var mongoose = require('mongoose');
var Room = require('Room');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
    address1: String,
    address2: String,
    city: String,
    postCode: String,
    preperedBy: String,
    rooms: [Room],
    userId: String
});

module.exports = mongoose.model('Property', PropertySchema);