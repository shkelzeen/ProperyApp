var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MediaSchema = new Schema({
    meida: String,
    roomId: String
});

module.exports = mongoose.model('Media', MediaSchema);