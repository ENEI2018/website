var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

router.get('/', function(req, res, next) {
  renderer.render(res, 'signup-submitted', {name: req.body.signup_name});
});

module.exports = router;
