let fs = require('fs');
let readline = require('readline');
let googleAuth = require('google-auth-library');
let google = require('googleapis');

const CREDS_PATH = "./../credentials/service-creds.json";
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

class Authentication {
  authenticate(){
    let key = require(CREDS_PATH);
    return new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
  }
}

module.exports = new Authentication();