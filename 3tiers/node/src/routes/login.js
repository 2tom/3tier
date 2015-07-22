var express = require('express');
var router = express.Router();
var model = require('../models/user');
var User = model.User;
var fs = require('fs');

/* GET home page. */
router.post('/node/login', function(req, res, next) {

  // post data recieve
  var userName = req.body.username;
  var passWord = req.body.password;
  var remoteIp = req.headers.host;

  // search user
  User.find({ username: userName }, function(err, docs) {
    if(err) {
      res.status(500);
      res.send('DB Error');
    } else if(docs.length === 0){
      res.redirect('/node');
    } else {
      var result = docs[0];
        if(result.username === userName && result.password === passWord) {
            var bitmap = fs.readFileSync(result.upload);

            //filetype analysis from binary
            var buf = new Uint8Array(bitmap);
            var headerStr = '';
            var headerHex = '';
            for (var i = 0; i < 10 ; i ++) {
              headerHex += buf[i].toString(16);
              headerStr += String.fromCharCode(buf[i]);
            }

            // Base64 encode
            var image64 = new Buffer(bitmap).toString('base64');
            // image
            var imageType = 'unknown';
            if(headerHex.indexOf("ffd8") !== -1) {
              imageType = 'jpg';
            } else if (headerStr.indexOf("PNG") !== -1) {
              imageType = 'png';
            } else if (headerStr.indexOf("GIF") !== -1) {
              imageType = 'gif';
            }
          
          res.render('user', {
            username: result.username,
            original: result.original,
            imageType: imageType,
            image64: image64,
            linkUrl: 'http://' + remoteIp
          });
        } else {
        res.status(401);
        res.send('Authentication Error');
      }
    }
  });
});

module.exports = router;
