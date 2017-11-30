var google = require('googleapis');
var config = require('./../util/config');
var util = require('./../util/util');

function appendSignupInfo(auth, signup_info) {
  var spreadsheet = config.signup_spreadsheet;
  var range = 'Inscricoes!A2:B';
  var data = [
    util.getDateTime(),
    signup_info.signup_name,
    signup_info.signup_email,
    signup_info.signup_phone,
    signup_info.signup_birthdate,
    signup_info.signup_school,
    signup_info.signup_course,
    signup_info.signup_year,
    signup_info.signup_cv,
    signup_info.signup_linkedin,
    signup_info.signup_github,
    signup_info.signup_website,
    signup_info.signup_night1 != undefined ? 'S' : 'N',
    signup_info.signup_night2 != undefined ? 'S' : 'N',
    signup_info.signup_night3 != undefined ? 'S' : 'N',
    signup_info.signup_stay_comments,
    signup_info.signup_food,
    signup_info.signup_food_comments,
    signup_info.signup_group
  ];

  appendData(auth, spreadsheet, range, data);
}

function appendGroupInfo(auth, group_info) {
  var spreadsheet = config.signup_spreadsheet;
  var range = 'Grupos!A2:B';
  var data = [
    util.getDateTime(),
    group_info.group_hash
  ];

  appendData(auth, spreadsheet, range, data);
}

function appendData(auth, spreadsheet, range, data_values) {
  var sheets = google.sheets('v4');

  sheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: spreadsheet,
    range: range,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [ data_values ]
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

module.exports = {
  appendSignupInfo: appendSignupInfo,
  appendGroupInfo: appendGroupInfo
}