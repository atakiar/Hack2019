const Tesseract = require('tesseract.js');

const parseImage = fileName => {
  Tesseract.recognize(fileName, 'eng', { logger: m => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text);
    }
  );
};

parseImage('test_images/test1.png');
parseImage('test_images/test2.png');
