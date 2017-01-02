var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/edcan');


var UserSchema = new schema({
    id: {type: String},
    name: {type: String},
    profile_img: {type: String},
});

var Users = mongoose.model("users", UserSchema);

exports.Users = Users;
exports.db = db;
