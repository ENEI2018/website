var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

router.get('/', function(req, res, next) {
  renderer.render(res, 'signup-intro');
});

module.exports = router;
