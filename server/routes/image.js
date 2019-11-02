// Express and router
const express = require('express');
const router = express.Router();

// Database
const imagesDB = require('');

/** POST to [BaseAddress]/image/
 * @description Takes image to be processed
 *
 * @param {string} image image to be processed and analyzed
 *
 * @return {object}
 *    success: true, text: {text in image}
 *    success: false, message: {error message}
 */
router.get('/', async (req, res) => {
  try {
    const pageID = req.body.pageID;
    const image = req.body.image;

    const result = await imagesDB.add(pageID, image);

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
