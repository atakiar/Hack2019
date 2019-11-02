// Express and router
const express = require('express');
const router = express.Router();

// Internal
const imagesDB = require('../database/imagesDB');
const imageProcessing = require('../services/imageProcessing');

/** POST to [BaseAddress]/image/add
 * @description Adds a new image
 *
 * @param {string} image image
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {string} result.text
 * @return {string} result.message
 */
router.post('/add', async (req, res) => {
  try {
    const pageID = req.pageID;
    const image = req.body.image;

    const data = imageProcessing.run(image);

    const result = await imagesDB.add(pageID, data.text);

    res
      .status(200)
      .send(JSON.stringify(result))
      .end();
  } catch (error) {
    res
      .status(500)
      .send(JSON.stringify(error))
      .end();
  }
});

module.exports = router;
