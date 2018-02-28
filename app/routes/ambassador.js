let express = require('express');
let router = express.Router();
let renderer = require('./../util/renderer');
let features = require('./../util/features');
let config = require('./../util/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Redirect if ambassadors feature is disabled
  if(!features.ambassadors) {
    res.redirect('/notfound');
    return;
  }

  let hasShow = false;
  for(let i = 0; i < config.ambassadors.length; i++) {
    if(config.ambassadors[i].show) {
      hasShow = true;
    }
  }
  
  // Redirect if no visible ambassadors
  if(!hasShow) {
    res.redirect('/notfound');
    return;
  }

  renderer.render(res, 'ambassador', {
    include_navbar: true
  });
});

module.exports = router;