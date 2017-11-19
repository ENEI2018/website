var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var execFile = require('child_process').execFile;

/* GET home page. */
router.get('/', function(req, res, next) {
  renderer.render(res, 'index', {});
});

module.exports = router;
