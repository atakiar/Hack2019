const imageProcessing = require('../services/imageProcessing');
const textProcessing = require('../services/textProcessing');

const tests = ['./__tests__/images/test2.png'];

const run = () => {
  tests.forEach(async filePath => {
    console.log('sup');
    const encodedImage = imageProcessing.toBase64(filePath);
    let { text } = await imageProcessing.processImage(encodedImage);
    console.log('sup2');
    text = await textProcessing.spellCorrection.customBased(text);
    console.log(`sup3: ${text}`);
  });
};

module.exports = { run };
