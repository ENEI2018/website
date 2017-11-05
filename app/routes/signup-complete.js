var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');

/* GET home page. */
router.post('/', function(req, res, next) {
  /*console.log(req.body.signup_name);
  console.log(req.body.signup_email);
  console.log(req.body.signup_phone);
  console.log(req.body.signup_birthdate);
  console.log(req.body.signup_school);
  console.log(req.body.signup_course);
  console.log(req.body.signup_year);
  console.log(req.body.signup_cv);
  console.log(req.body.signup_linkedin);
  console.log(req.body.signup_github);
  console.log(req.body.signup_website);
  console.log(req.body.signup_night1 != undefined);
  console.log(req.body.signup_night2 != undefined);
  console.log(req.body.signup_night3 != undefined);
  console.log(req.body.signup_stay_comments);
  console.log(req.body.signup_food);
  console.log(req.body.signup_food_comments);*/

  renderer.render(res, 'signup-complete', {name: req.body.signup_name});
});

module.exports = router;
