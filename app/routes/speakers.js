let express = require('express');
let router = express.Router();
let renderer = require('./../util/renderer');
let features = require('./../util/features');
let config = require('./../util/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Redirect if speakers feature is disabled
  if(!features.speakers) {
    res.redirect('/notfound');
    return;
  }

  renderer.render(res, 'speakers', {
    include_navbar: true
  });
});

router.get('/:id', function(req, res, next) {
  // Redirect if speakers feature is disabled
  if(!features.speakers) {
    res.redirect('/notfound');
    return;
  }

  let speakerId = req.params.id;
  if(config.speakers.length <= speakerId) {
    res.redirect('/notfound');
    return;
  }

  let speaker = config.speakers[speakerId];

  renderer.render(res, 'speaker', {
    include_navbar: true,
    speaker: speaker
  });
});

module.exports = router;
