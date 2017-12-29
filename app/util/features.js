module.exports = {
    tickets : process.env.ENEI_dev === '1' || process.env.ENEI_tickets === '1',
    sponsors : process.env.ENEI_dev === '1' || process.env.ENEI_sponsors === '1'
}