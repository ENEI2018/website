var crypto = require('crypto')

// Get current timestamp
function getDateTime() {
    var moment = require('moment');
    var now = moment()
    return now.format('YYYY-MM-DD HH:mm:ss Z')
}

// Get a random SHA1 hash
function getRandomHash() {
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    return crypto.createHash('sha1').update(current_date + random).digest('hex');
}

module.exports = {
    getDateTime: getDateTime,
    getRandomHash: getRandomHash
}
