// Express and router
const express = require('express');
const router = express.Router();

// External
const helmet = require('helmet');
const bodyParser = require('body-parser');
const hpp = require('hpp');

// Internal
const jwt = require('./jwt');
const messages = require('./messages');

// Helmet
router.use(helmet());
router.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  })
);
router.use(helmet.noCache());

// BodyParser
router.use(bodyParser.urlencoded({ extended: false, parameterLimit: 4 }));
router.use(bodyParser.json());

// HTTP Parameter Pollution
router.use(hpp());

// Authorization
router.use((req, res, next) => {
  const unauthorized = () => {
    res
      .status(401)
      .send(JSON.stringify(messages.unauthorized))
      .end();
  };

  if (req.url === '/page/new') {
    next();
  } else if (req.headers.authorization) {
    jwt
      .verifyToken(req.headers.authorization)
      .then(({ pageID }) => {
        req.pageID = pageID;
        next();
      })
      .catch(() => {
        unauthorized();
      });
  } else {
    unauthorized();
  }
});

// Log
router.use((req, res, next) => {
  console.log(req.url);
  next();
});

module.exports = router;
