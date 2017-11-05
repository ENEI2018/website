var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var execFile = require('child_process').execFile;

router.post('/', function(req, res, next) {
  var execOptions = {
    maxBuffer : 1024 * 1024
  }

  execFile('/www/website-enei/hooks/hook.sh', execOptions, function(error, stdout, stderr) {
    console.log('Git script executed');
    console.log(error);
  });
});

module.exports = router;
