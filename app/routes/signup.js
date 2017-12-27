var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

router.get('/', function(req, res, next) {
  // Redirect if tickets feature is disabled
  if(process.env.ENEI_tickets !== '1') {
    res.redirect('/notfound');
    return;
  }
  
  // Get group hash from URL
  renderer.render(res, 'signup', { group_hash: req.query.group ? req.query.group : '' });
});

module.exports = router;
