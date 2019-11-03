const randomstring = require('randomstring');

const length = 6;
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const randomString = () => randomstring.generate({ length, charset });

module.exports = randomString;
