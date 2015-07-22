var model = require('../models/user');
var User = model.User;


//User.find({ username: 'tera3' }, function(err, docs) {
User.find({}, function(err, docs) {
  console.log(docs);
  for (var i=0, size=docs.length; i<size; ++i) {
    console.log(docs[i]);
  }
});
