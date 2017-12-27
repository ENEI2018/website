var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

router.get('/', function(req, res, next) {
  // Redirect if tickets feature is disabled
  if(process.env.ENEI_tickets !== '1') {
    res.redirect('/notfound');
    return;
  }
  
  renderer.render(res, 'signup-intro');
});

module.exports = router;
