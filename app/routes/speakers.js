var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

/* GET home page. */
router.get('/', function(req, res, next) {
  renderer.render(res, 'speakers', {
    include_navbar: true
  });
});

router.get('/:id', function(req, res, next) {
  renderer.render(res, 'speakers', {
    include_navbar: true
  });
});

module.exports = router;
