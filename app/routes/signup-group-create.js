var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var config = require('./../util/config');
var googleutil = require('./../util/googleutil');
var authentication = require("./../util/authenticate");

router.post('/', function(req, res, next) {
  // Append data to Google Sheet
  if(req.body.group !== undefined) {
    authentication.authenticate().then((auth)=>{
      req.body.group_hash = req.body.group;
      googleutil.appendGroupInfo(auth, req.body);
      console.log('Group appended');
    });
  }
  res.redirect('/signup?group=' + req.body.group);
});

module.exports = router;
