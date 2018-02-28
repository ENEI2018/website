var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
let features = require('./../util/features');
let schedule = require('./../util/schedule');

router.get('/', function (req, res, next) {
  let day = 0;
  if(typeof req.query.day != 'undefined' && req.query.day >= 0 && req.query.day <= 3) {
    day = req.query.day;
  }
  drawSchedule(req, res, next, day);
});

function drawSchedule(req, res, next, activeDay) {
  // Redirect if schedule feature is disabled
  if (!features.schedule) {
    res.redirect('/notfound');
    return;
  }

  console.log(activeDay);
  for (let day = 0; day < schedule.length; ++day) {
    for (let entry = 0; entry < schedule[day].schedule.length; ++entry) {
      let entryObj = schedule[day].schedule[entry];
      if (entryObj.typeTalks || entryObj.typeWorkshops) {
        entryObj.show = false;
        for (let talk = 0; talk < entryObj.slots.length; ++talk) {
          if (entryObj.slots[talk].show) {
            entryObj.show = true;
            break;
          }
        }
      }
    }
  }

  renderer.render(res, 'schedule', {});
}

module.exports = router;