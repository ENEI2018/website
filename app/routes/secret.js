var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var features = require('./../util/features');

router.get('/', function(req, res, next) {
  renderer.render(res, 'secret', { secret_key: process.env.PROMO_CODE});
});

module.exports = router;
