// External
const spawn = require('child_process').spawn;

// Spell correction
const spellCorrection = text => new Promise((resolve, reject) => {
  let result = '';

  try {
    const pythonProcess = spawn('python', [
      './services/textProcessing/spellCorrection/custom/spellCorrection.py',
      text
    ]);

    pythonProcess.stdout.on('data', data => {
      result += data;
      resolve(result);
    });

    pythonProcess.stderr.on('data', error => {
      console.log(error.toString());
    });
  } catch (error) {
    console.log(error);
    reject(error);
  }
});

module.exports = spellCorrection;
