const Tesseract = require('tesseract.js');

const processImage = async image => {
  let worker = Tesseract.createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');

  const { data } = await worker.recognize(image);

  await worker.terminate();

  return data;
};

module.exports = processImage;
