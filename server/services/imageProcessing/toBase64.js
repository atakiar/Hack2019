const fs = require('fs');

const encode = filePath => `data:image/png;base64,${fs.readFileSync(filePath, 'base64')}`;

module.exports = encode;
