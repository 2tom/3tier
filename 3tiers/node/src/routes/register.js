var express = require('express');
var router = express.Router();
var model = require('../models/user');
var User = model.User;

/* GET home page. */
router.post('/node/register', function(req, res, next) {

  var userName = req.body.username;
  var passWord = req.body.password;
  var fpath = req.files.uploadFile.path;
  var forg = req.files.uploadFile.originalname;

  var query = {
    username: userName,
    password: passWord,
    upload: fpath,
    original: forg
  };

  var newUser = new User(query);
  console.log(newUser);
  newUser.save(function(err) {
    if(err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
