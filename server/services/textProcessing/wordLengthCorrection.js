const wordLengthCorrection = text => {
  let result = text;
  result = result.replace(/-\n/g, '');
  result = result.replace(/\n/g, ' ');
  return result;
};

module.exports = wordLengthCorrection;
