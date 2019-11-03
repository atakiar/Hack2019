// Express and router
const express = require('express');
const router = express.Router();

// Database
const pagesDB = require('../database/pagesDB');
const imagesDB = require('../database/imagesDB');


/** POST to [BaseAddress]/page/new
 * @description Adds a new image
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {Object} result.token
 * @return {string} result.message
 */

router.post('/new', async (req, res) => {
  try {
    const result = await pagesDB.add();

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

/** GET to [BaseAddress]/page/get
 * @description Gets a new page
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {string} result.text
 * @return {string} result.message
 */
router.get('/get', async (req, res) => {
  try {
    const pageID = req.pageID;

    let result = await pagesDB.get(pageID);

    console.log(result);

    if (!result.finalText) {
      const image = await imagesDB.get(pageID);
      const finalText = image.text;
      result = await pagesDB.update(pageID, finalText);
    }

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
