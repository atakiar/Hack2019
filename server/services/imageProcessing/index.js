const Tesseract = require('tesseract.js');
const fs = require('fs');

const encode = fileName => fs.readFileSync(fileName, 'base64');

const cleanup = text => {
  let result = text;
  result = result.replace(/-\n/g, '');
  result = result.replace(/\n/g, ' ');
  return result;
};

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

// run(encode('test_images/test1.png'));
// parseImage(encode('test_images/test2.png'));
