let express = require('express');
let router = express.Router();
let renderer = require('./../util/renderer');
let features = require('./../util/features');
let config = require('./../util/config');

router.get('/:id', function(req, res, next) {
  // Redirect if speakers feature is disabled
    console.log("here");
  if(!features.talks) {
    res.redirect('/notfound');
    return;
  }
  console.log("here");

  let talk = undefined;
  let talkId = req.params.id;
  for(let i = 0; i < config.talks.length; i++) {
    if(config.talks[i].id == talkId) {
      talk = config.talks[i];
      break;
    }
  }

  console.log("here");
  if(talk === undefined || !talk.show) {
    res.redirect('/notfound');
    return;
  }

  console.log("here");
  if(talk.faqs.length === 0 && talk.talkSummary === "" && talk.talkTitle === "") {
    talk.displayDetails = false;
  } else {
    talk.displayDetails = true;
  }

  console.log("here");
  if(talk.talkSummary === "" && talk.talkTitle === "") {
    talk.showTalk = false;
  } else {
    talk.showTalk = true;
  }

  console.log("here");
  renderer.render(res, 'talk', {
    include_navbar: true,
    talk: talk
  });
});

module.exports = router;
