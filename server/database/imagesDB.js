// External
const monk = require('monk');

// Setup
const db = monk('localhost:27017/Hack2019');
const imagesCollections = db.get('Images');
imagesCollections.createIndex({ pageID: 1 });
