var mongoose = require('mongoose');
var mongoIp = process.env.MONGODB_PORT_27017_TCP_ADDR;

var url = 'mongodb://' + mongoIp + '/user';

var db = mongoose.createConnection(url, function (err, res){
  if(err){
    console.log("Error connected: " + url + " - " + err);
  } else {
    console.log("Success connected: " + url);
  }
});

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    upload: String,
    original: String
}, {collection: 'info'});

exports.User = db.model('User', UserSchema);
