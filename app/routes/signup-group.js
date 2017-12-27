var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var util = require('./../util/util');

router.get('/', function(req, res, next) {
  // Redirect if tickets feature is disabled
  if(process.env.ENEI_tickets !== '1') {
    res.redirect('/notfound');
    return;
  }
  
  renderer.render(res, 'signup-group', { group_hash: util.getRandomHash()});
});

module.exports = router;
