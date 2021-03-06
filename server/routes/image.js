// Express and router
const express = require('express');
const router = express.Router();

// Database
const imagesDB = require('../database/imagesDB');

// Internal
const imageProcessing = require('../services/imageProcessing');
const textProcessing = require('../services/textProcessing');

/** POST to [BaseAddress]/image/add
 * @description Adds a new image
 *
 * @param {string} image base64 encoded image
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {string} result.message
 */
router.post('/add', async (req, res) => {
  try {
    const pageID = req.pageID;
    const image = req.body.image;

    let { text } = await imageProcessing.processImage(image);
    text = await textProcessing.spellCorrection.packageBased(text);

    const result = await imagesDB.add(pageID, text);

    console.log(result.text);

    res
      .status(200)
      .send(JSON.stringify({ ...result, pageID }))
      .end();
  } catch (error) {
    res
      .status(500)
      .send(JSON.stringify(error))
      .end();
  }
});

module.exports = router;
