var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

router.get('/', function(req, res, next) {
  // Get group hash from URL
  renderer.render(res, 'signup', { group_hash: req.query.group ? req.query.group : '' });
});

module.exports = router;
