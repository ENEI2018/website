var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var config = require('./../util/config');
var google = require('googleapis');
var authentication = require("./../util/authenticate");

/* GET home page. */
router.post('/', function(req, res, next) {
  // Append data to Google Sheet
  if(req.body.signup_name !== undefined) {
    authentication.authenticate().then((auth)=>{
      appendData(auth, req);
    });
  }

  renderer.render(res, 'signup-complete', {name: req.body.signup_name});
});

// Get current timestamp
function getDateTime() {
  var moment = require('moment');
  var now = moment()
  return now.format('YYYY-MM-DD HH:mm:ss Z')
}

// Append data to Google Sheet
function appendData(auth, req) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: config.signup_spreadsheet,
    range: 'Folha1!A2:B',
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [
          getDateTime(),
          req.body.signup_name,
          req.body.signup_email,
          req.body.signup_phone,
          req.body.signup_birthdate,
          req.body.signup_school,
          req.body.signup_course,
          req.body.signup_year,
          req.body.signup_cv,
          req.body.signup_linkedin,
          req.body.signup_github,
          req.body.signup_website,
          req.body.signup_night1 != undefined ? 'S' : 'N',
          req.body.signup_night2 != undefined ? 'S' : 'N',
          req.body.signup_night3 != undefined ? 'S' : 'N',
          req.body.signup_stay_comments,
          req.body.signup_food,
          req.body.signup_food_comments
        ]
      ]
    }
  }, (err, response) => {
    if (err) {
      console.log('The Sheets API returned an error: ' + err);
      return;
    } else {
        console.log("Appended signup info.");
    }
  });
}

module.exports = router;
