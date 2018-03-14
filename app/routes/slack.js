var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var execFile = require('child_process').execFile;

router.get('/', function (req, res, next) {
    res.redirect("https://join.slack.com/t/eneipt/shared_invite/enQtMzI4NjY4MjU5NzQ1LTE1ZDFhNzZjZTc5MzhhNmIzZDU5MjIyMjcyNWFjNGE3ZWFkNTgzMmNiZThiOTdiODFlN2U1NjdiMGRhMDE3M2Y");
});

module.exports = router;
