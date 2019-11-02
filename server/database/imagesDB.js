// External
const monk = require('monk');

// Internal
const messages = require('../util/messages');

// Setup
const db = monk('localhost:27017/Hack2019');
const imagesCollection = db.get('Images');

/** add
 * @description Adds a new image
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {string} result.message
 */
module.exports.add = async (pageID, text, confidence) => {
  let response = { success: false };

  try {
    await imagesCollection.insert({
      pageID,
      text,
      confidence,
    });

    response.success = true;
    return response;
  } catch (error) {
    response.message = messages.error;
    throw new Error(response);
  }
};
