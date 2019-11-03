// External
const spawn = require('child_process').spawn;

// Spell correction
const spellCorrection = text => new Promise((resolve, reject) => {
  let result = '';

  try {
    const pythonProcess = spawn('python', [
      './services/textProcessing/spellCorrection/package/spellCorrection.py',
      text
    ]);

    pythonProcess.stdout.on('data', data => {
      result += data;
      resolve(result);
    });
  } catch (error) {
    reject(error);
  }
});

module.exports = spellCorrection;
