// External
const monk = require('monk');

// Internal
const messages = require('../util/messages');

// Setup
const db = monk('localhost:27017/Hack2019');
const imagesCollection = db.get('Images');
imagesCollection.createIndex({ pageID: 1 });

/** add
 * @description Adds a new image
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {string} result.message
 */
const add = async (pageID, text) => {
  let response = { success: false };

  try {
    await imagesCollection.insert({
      pageID,
      text,
    });

    response.success = true;
    return response;
  } catch (error) {
    response.message = messages.error;
    throw new Error(response);
  }
};

/** getAll
 * @description Gets all images associated with a pageID
 *
 * @return {Object} images
 */
const getAll = async pageID => {
  try {
    const images = await imagesCollection.findAll({ pageID });
    return images;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { add, getAll };
