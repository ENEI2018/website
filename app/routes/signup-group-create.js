var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var googleutil = require('./../util/googleutil');

router.post('/', function(req, res, next) {
  // Redirect if tickets feature is disabled
  if(process.env.ENEI_tickets !== '1') {
    res.redirect('/notfound');
    return;
  }
  
  googleutil.appendGroupInfo(req.body, function(success, err) {
    if(success) {
      console.log('Group appended to Google Sheets');
      res.redirect('/signup?group=' + req.body.group);
    } else {
      console.error('Spreadsheets API error: ' + err);
      res.redirect('/signup-error');
    }
  });
});

module.exports = router;
