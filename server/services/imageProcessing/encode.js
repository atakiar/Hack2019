const fs = require('fs');

const encode = fileName => fs.readFileSync(fileName, 'base64');

export default encode;
