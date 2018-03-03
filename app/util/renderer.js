var config = require('./config');
var features = require('../util/features');
var schedule = require('../util/schedule');

function render(res, page, options) {
  var new_options = {
    title: config.app_title,
    author: config.author,
    description: config.description,
    layout: 'layout',
    include_tickets: features.tickets,
    include_sponsors: features.sponsors,
    sponsors: config.sponsors,
    include_navbar: features.nav,
    speakers: config.speakers,
    partners1: config.partners1,
    partners2: config.partners2,
    team: config.team,
    schedule: schedule,
    earlybird_soldout: features.earlybird_soldout,
    include_ambassadors: features.ambassadors,
    ambassadors: config.ambassadors,
    faqs: config.faqs,
    desafios: config.desafios,
    desafios_enabled: features.desafios
  }

  res.render(page, Object.assign(new_options, options));
}

module.exports = {
  render: render
}
