var express = require('express');
var router = express.Router();
var renderer = require('./../util/renderer');
var execFile = require('child_process').execFile;

/* GET home page. */
router.get('/', function (req, res, next) {
    const sponsors = {
        main: [
            {
                name: "Sonae IM",
                image: "sonaeim.png",
                href: "www.sonaeim.com",
                show: true
            }
        ],
        gold: [
            {
                name: "Deloitte",
                image: "deloitte.jpg",
                href: "www.deloitte.com",
                show: true
            },
            {
                name: "Efacec",
                image: "efacec.jpg",
                href: "www.efacec.com",
                show: true
            },
            {
                name: "Natixis",
                image: "natixis.png",
                href: "www.natixis.com",
                show: true
            },
            {
                name: "Wipro",
                image: "wipro.jpg",
                href: "www.wipro.com",
                show: true
            }
        ],
        silver: [
            {
                name: "Aptiv",
                image: "aptiv.jpg",
                href: "www.aptiv.com",
                show: true
            },
            {
                name: "Blip",
                image: "blip.png",
                href: "www.blip.pt",
                show: true
            },
            {
                name: "Novabase",
                image: "novabase.png",
                href: "www.novabase.pt",
                show: true
            }
        ],
        bronze: [
            {
                name: "Critical Manufacturing",
                image: "criticalmanufacturing.png",
                href: "www.criticalmanufacturing.com",
                show: true
            },
            {
                name: "Smart Consulting",
                image: "smartconsulting.jpg",
                href: "www.smartconsulting.pt",
                show: true
            },
            {
                name: "Fabamaq",
                image: "fabamaq.jpg",
                href: "www.fabamaq.com",
                show: true
            },
            {
                name: "Fraunhofer",
                image: "fraunhofer.jpg",
                href: "www.fraunhofer.pt",
                show: true
            },
            {
                name: "Life on Mars",
                image: "lifeonmars.png",
                href: "www.lifeonmars.pt",
                show: true
            },
            {
                name: "Whitesmith",
                image: "whitesmith.png",
                href: "www.whitesmith.co",
                show: true
            },
            {
                name: "Bitmaker",
                image: "bitmaker.png",
                href: "www.wearebitmaker.com",
                show: true
            },
            {
                name: "Pixelmatters",
                image: "pixelmatters.png",
                href: "www.pixelmatters.com",
                show: true
            }
        ],
    };
    renderer.render(res, 'index', {footer_include_seeyousoon: 'true', sponsors: sponsors});
});

module.exports = router;
