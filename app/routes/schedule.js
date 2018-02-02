var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
let features = require('./../util/features');

router.get('/', function(req, res, next) {
  // Redirect if schedule feature is disabled
  if(!features.schedule) {
    res.redirect('/notfound');
    return;
  }

  renderer.render(res, 'schedule', {});
});

module.exports = router;
