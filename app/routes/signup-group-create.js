var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var googleutil = require('./../util/googleutil');

router.post('/', function(req, res, next) {
  googleutil.appendGroupInfo(req.body, function(success, err) {
    if(success) {
      console.log('Group appended to Google Sheets');
    } else {
      console.error('Spreadsheets API error: ' + err);
    }
  });
  
  res.redirect('/signup?group=' + req.body.group);
});

module.exports = router;
