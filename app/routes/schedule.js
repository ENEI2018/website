var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
let features = require('./../util/features');
let schedule = require('./../util/schedule');

router.get('/', function(req, res, next) {
  // Redirect if schedule feature is disabled
  if(!features.schedule) {
    res.redirect('/notfound');
    return;
  }

  for(let day = 0; day < schedule.length; ++day) {
    for(let entry = 0; entry < schedule[day].schedule.length; ++entry) {
      let entryObj = schedule[day].schedule[entry];
      if(entryObj.typeTalks || entryObj.typeWorkshops) {
        entryObj.show = false;
        for(let talk = 0; talk < entryObj.slots.length; ++talk) {
          if(entryObj.slots[talk].show) {
            entryObj.show = true;
            break;
          }
        }
      }
    }
  }

  renderer.render(res, 'schedule', {});
});

module.exports = router;
