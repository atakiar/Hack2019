/* eslint-disable indent */
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

router.post('/new', async(req, res) => {
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
router.get('/get', async(req, res) => {
    try {
        const pageID = req.query.pageID;

        const result = await imagesDB.get(pageID);

        if (!result.success) {
            res.render('index', {
                err: true,
            });
        }

        res.render('index', {
            x: result.text,
            err: false,
        });
    } catch (error) {
        res
            .status(500)
            .send(JSON.stringify(error))
            .end();
    }
});

module.exports = router;