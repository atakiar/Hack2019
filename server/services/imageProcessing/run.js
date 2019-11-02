// External
const Tesseract = require('tesseract.js');

// Internal
const cleanup = require('./cleanup');

// Run
const run = encodedImage => {
  const base64 = `data:image/png;base64,${encodedImage}`;

  Tesseract.recognize(base64, 'eng', {
    logger: m => console.log(m),
  }).then(({ data: { text, confidence } }) => {
    const cleanText = cleanup(text);
    console.log(cleanText);
    if (confidence < 80) {
      // word cleanup
    }
    return cleanText;
  });
};

export default run;
