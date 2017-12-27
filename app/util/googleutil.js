let google = require('googleapis');
let config = require('./../util/config');
let util = require('./../util/util');
let authenticate = require('./../util/authenticate');

// Callback receives bool as success
function appendSignupInfo(signup_info, callback) {
  let spreadsheet = config.signup_spreadsheet;
  let range = 'Inscricoes!A2:B';
  let data = [
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

  appendData(authenticate.authenticate(), spreadsheet, range, data, callback);
}

// Callback receives bool as success
function appendGroupInfo(group_info, callback) {
  var spreadsheet = config.signup_spreadsheet;
  var range = 'Grupos!A2:B2';
  var data = [
    util.getDateTime(),
    group_info.group
  ];

  appendData(authenticate.authenticate(), spreadsheet, range, data, callback);
}

function appendData(auth, spreadsheet, range, data_values, callback) {
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
      callback(false, err);
    } else {
      callback(true);
    }
  });
}

module.exports = {
  appendSignupInfo: appendSignupInfo,
  appendGroupInfo: appendGroupInfo
}