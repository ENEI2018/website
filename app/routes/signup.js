var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var features = require('./../util/features');

router.get('/', function(req, res, next) {
  // Redirect if tickets feature is disabled
  if(!features.tickets) {
    res.redirect('/notfound');
    return;
  }

  // Get group hash from URL
  renderer.render(res, 'signup', { group_hash: req.query.group ? req.query.group : '' });
});

module.exports = router;
