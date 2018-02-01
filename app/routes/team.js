var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
let features = require('./../util/features');

router.get('/', function(req, res, next) {
  if(!features.team) {
    res.redirect('/notfound');
    return;
  }

  renderer.render(res, 'team', {});
});

module.exports = router;
