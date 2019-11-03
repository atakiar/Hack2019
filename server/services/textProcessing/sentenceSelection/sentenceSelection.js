// External
const spawn = require('child_process').spawn;

// Spell correction
const sentenceSelection = async paragraphs => {
  let result = '';

  const pythonProcess = spawn('python', ['./spellCorrection.py', paragraphs]);

  pythonProcess.stdout.on('data', data => {
    result += data;
  });

  pythonProcess.stdout.on('close', () => result);
};

export default sentenceSelection;
