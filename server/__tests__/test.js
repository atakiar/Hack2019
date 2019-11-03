const imageProcessing = require('../services/imageProcessing');
const textProcessing = require('../services/textProcessing');

const tests = ['./images/test2.png'];

const run = () => {
  tests.forEach(async filePath => {
    const encodedImage = imageProcessing.toBase64(filePath);
    let { text } = await imageProcessing.processImage(encodedImage);
    console.log(text);
    await textProcessing.spellCorrection(text);
    console.log(text);
  });
};

run();
