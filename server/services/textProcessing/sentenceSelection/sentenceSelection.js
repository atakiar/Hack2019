// External
const spawn = require('child_process').spawn;


// Sentence selection

const sentenceSelection = async paragraphs => {
  let result = '';

  const pythonProcess = spawn('python', [
    './spellCorrection.py',
    ...paragraphs
  ]);

  pythonProcess.stdout.on('data', data => {
    result += data;
  });

  return result;
};

module.export = sentenceSelection;

