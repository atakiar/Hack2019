// Express and router
const express = require('express');
const router = express.Router();

// Database
const pagesDB = require('../database/pagesDB');

/** POST to [BaseAddress]/page/new
 * @description Adds a new image
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {Object} result.token
 * @return {string} result.message
 */
router.get('/new', async (req, res) => {
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

    const result = await pagesDB.get(pageID);

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
