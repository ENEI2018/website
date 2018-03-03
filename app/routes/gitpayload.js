var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var config = require('./../util/config');
var execFile = require('child_process').execFile;

router.post('/', function(req, res, next) {
  var execOptions = {
    maxBuffer : 1024 * 1024
  }

  var branch = JSON.parse(req.body.payload).ref;
  if(branch !== "refs/heads/master") {
    console.log("Skipping deployment");
    res.sendStatus(200);
    return;
  }

  execFile(config.update_script, execOptions, function(error, stdout, stderr) {
    console.log('Git script executed');
    console.log(error);
  });

  res.sendStatus(200);
});

module.exports = router;
