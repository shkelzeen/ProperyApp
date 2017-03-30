var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Media = require('Media');

var RoomSchema = new Schema({
    name: String,
    medias: [Media]
});

module.exports = mongoose.model('Media', RoomSchema);