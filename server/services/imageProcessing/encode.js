const fs = require('fs');

const encode = fileName => `data:image/png;base64,${fs.readFileSync(fileName, 'base64')}`;

module.exports = encode;
