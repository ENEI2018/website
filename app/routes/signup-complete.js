var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var config = require('./../util/config');
var googleutil = require('./../util/googleutil');
var authentication = require("./../util/authenticate");

/* GET home page. */
router.post('/', function(req, res, next) {
  // Append data to Google Sheet
  googleutil.appendSignupInfo(req.body, function(success, error) {
    if(success) {
      console.log('Group appended to Google Sheets');
    } else {
      console.error('Spreadsheets API error: ' + err);
    }
  });
  
  res.redirect('/signup-submitted');
});

module.exports = router;
