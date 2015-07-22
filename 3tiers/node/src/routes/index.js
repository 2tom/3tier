var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/node', function(req, res, next) {
  var remoteIp = req.headers.host;
  res.render('index', {
    title: 'Express',
  });
});

module.exports = router;
