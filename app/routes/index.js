var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var execFile = require('child_process').execFile;

/* GET home page. */
router.get('/', function(req, res, next) {
  renderer.render(res, 'index', {footer_include_seeyousoon: 'true'});
});

router.post('/', function(req, res, next) {
  var execOptions = {
    maxBuffer : 1024 * 1024
  }

  execFile('/www/website-enei/hooks/hook.sh', execOptions, function(error, stdout, stderr) {
    console.log('Git script executed');
    console.log(error);
  });

  res.sendStatus(200);
});

module.exports = router;
