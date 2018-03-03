module.exports = {
    dev : process.env.ENEI_dev === '1',
    sponsors : process.env.ENEI_dev === '1' || process.env.ENEI_sponsors === '1' || true,
    tickets : process.env.ENEI_dev === '1' || true,
    speakers : process.env.ENEI_dev === '1' || true,
    nav: process.env.ENEI_dev === '1' || true,
    schedule: process.env.ENEI_dev === '1' || true,
    team: process.env.ENEI_dev === '1' || true,
    earlybird_soldout: process.env.ENEI_dev === '1' || true,
    ambassadors: process.env.ENEI_dev === '1' || true,
    workshops: process.env.ENEI_dev === '1' || false,
    talks: process.env.ENEI_dev === '1' || true,
    desafios: process.env.ENEI_dev === '1' || false,
}
