module.exports = {
    dev : process.env.ENEI_dev === '1',
    sponsors : process.env.ENEI_dev === '1' || process.env.ENEI_sponsors === '1' || true,
    tickets : process.env.ENEI_dev === '1' || true,
    speakers : process.env.ENEI_dev === '1' || true,
    nav: process.env.ENEI_dev === '1' || true
}