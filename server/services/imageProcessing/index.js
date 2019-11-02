// External
const Tesseract = require('tesseract.js');

// Internal
const toBase64 = require('./toBase64');

// Setup
let worker = Tesseract.createWorker();

const initialize = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
};

// Run
const processImage = async encodedImage => {
  let {
    data: { text, confidence },
  } = await worker.recognize(encodedImage);
  return { text, confidence };
};

module.exports = {
  initialize,
  processImage,
  toBase64,
};
