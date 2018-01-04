module.exports = {
    sponsors : process.env.ENEI_dev === '1' || process.env.ENEI_sponsors === '1' || false,
    tickets : process.env.ENEI_dev === '1' || false,
    nav: process.env.ENEI_dev === '1' || false
}