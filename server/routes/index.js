// General
const express = require('express');
const router = express.Router();

// App routers
const pageRouter = require('./page.js');
const imageRouter = require('./image.js');

// Use private app routers
router.use('/page', pageRouter);
router.use('/image', imageRouter);

module.exports = router;