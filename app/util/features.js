module.exports = {
    dev : process.env.ENEI_dev === '1',
    sponsors : process.env.ENEI_dev === '1' || process.env.ENEI_sponsors === '1' || true,
    tickets : process.env.ENEI_dev === '1' || false,
    speakers : process.env.ENEI_dev === '1' || false,
    nav: process.env.ENEI_dev === '1' || false
}