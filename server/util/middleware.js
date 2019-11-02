// Express and router
const express = require('express');
const router = express.Router();

// External
const helmet = require('helmet');
const bodyParser = require('body-parser');
const hpp = require('hpp');

// Helmet
router.use(helmet());
router.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"]
    }
  })
);
router.use(helmet.noCache());
router.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// BodyParser
router.use(bodyParser.urlencoded({ extended: false, parameterLimit: 1 }));
router.use(bodyParser.json());

// HTTP Parameter Pollution
router.use(hpp());

// Log URL
router.use((req, res, next) => {
  next();
});

module.exports = router;
