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
 * @return {string} result.text
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
    response.text = text;
    return response;
  } catch (error) {
    response.message = messages.error;
    throw new Error(response);
  }
};

const get = async pageID => {
  let response = { success: false };

  try {
    const image = await imagesCollection.findOne({ pageID });

    response.success = true;
    response.text = image.text;
    return response;
  } catch (error) {
    response.message = messages.error;
    throw new Error(response);
  }
};

module.exports = { add, get };
