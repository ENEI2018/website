var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var execFile = require('child_process').execFile;

router.get('/', function (req, res, next) {
    res.redirect("https://enei18.eventbrite.pt");
});

module.exports = router;
