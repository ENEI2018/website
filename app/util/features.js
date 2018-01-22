module.exports = {
    sponsors : process.env.ENEI_dev === '1' || process.env.ENEI_sponsors === '1' || true,
    tickets : process.env.ENEI_dev === '1' || false,
    speakers : process.env.ENEI_dev === '1' || true,
    nav: process.env.ENEI_dev === '1' || false
}