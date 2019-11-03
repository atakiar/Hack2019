// External
const spawn = require('child_process').spawn;

// Spell correction
const spellCorrection = async text => {
  let result = '';

  const pythonProcess = spawn('python', ['./spellCorrection.py', text]);

  pythonProcess.stdout.on('data', data => {
    result += data;
  });

  return result;
};

module.exports = spellCorrection;
