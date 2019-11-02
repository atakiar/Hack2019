// Internal
const toBase64 = require('./toBase64');
const processImage = require('./processImage');

module.exports = {
  processImage,
  toBase64,
};

processImage(toBase64('./services/imageProcessing/test_images/test1.png'));
