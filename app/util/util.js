// Get current timestamp
function getDateTime() {
    var moment = require('moment');
    var now = moment()
    return now.format('YYYY-MM-DD HH:mm:ss Z')
}

module.exports = {
    getDateTime: getDateTime
}
