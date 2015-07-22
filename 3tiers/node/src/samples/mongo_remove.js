var model = require('../models/user');
var User = model.User;


User.remove({}, function(err) {
  console.log(err);
});
