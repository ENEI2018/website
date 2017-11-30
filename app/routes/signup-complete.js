var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var config = require('./../util/config');
var googleutil = require('./../util/googleutil');
var authentication = require("./../util/authenticate");

/* GET home page. */
router.post('/', function(req, res, next) {
  // Append data to Google Sheet
  if(req.body.signup_name !== undefined) {
    authentication.authenticate().then((auth)=>{
      googleutil.appendSignupInfo(auth, req.body);
    });
  }
  res.redirect('/signup-submitted');
});

module.exports = router;
