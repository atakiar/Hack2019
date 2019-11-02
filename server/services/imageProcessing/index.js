// External
const { createWorker } = require('tesseract.js');

// Internal
const cleanup = require('./cleanup');

// Setup
let worker = createWorker();

const initialize = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
};

// Run
const processImage = async encodedImage => {
  let { text, confidence } = await worker.recognize(encodedImage);

  text = cleanup(text);
  return { text, confidence };
};

module.exports = {
  initialize,
  processImage,
};
