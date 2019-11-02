// External
const spawn = require('child_process').spawn;

// Spell correction
const spellCorrection = async corpus => {
  let result = '';

  const pythonProcess = spawn('python', ['./spellCorrection.py', corpus]);

  pythonProcess.stdout.on('data', data => {
    result += data;
  });

  pythonProcess.stdout.on('close', () => result);
};

export default spellCorrection;
