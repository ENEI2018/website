var config = require('./config');
var features = require('../util/features');

function render(res, page, options) {
    var new_options = {
        title: config.app_title,
        author: config.author,
        description: config.description,
        layout: 'layout',
        include_tickets: features.tickets,
        include_sponsors: features.sponsors,
        sponsors: config.sponsors
    }

    res.render(page, Object.assign(new_options, options));
}

module.exports = {
    render: render
}
