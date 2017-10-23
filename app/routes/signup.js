var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

/* GET home page. */
router.get('/', function(req, res, next) {
  renderer.render(res, 'signup', {});
});

module.exports = router;
