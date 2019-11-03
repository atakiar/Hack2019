// External
const jwt = require('jsonwebtoken');

// Internal
const config = require('./config');

// Create token
const createToken = pageID => jwt.sign(
  {
    pageID,
  },
  config.secret,
  { issuer: '// todo' }
);

// Verify token
const verifyToken = token => new Promise((resolve, reject) => {
  jwt.verify(
    token,
    config.secret,
    { issuer: '// todo' },
    (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    }
  );
});

module.exports = {
  createToken,
  verifyToken,
};
