// External
const monk = require('monk');

// Internal
const randomString = require('../util/randomString');
const messages = require('../util/messages');
const jwt = require('../util/jwt');

// Setup
const db = monk('localhost:27017/Hack2019');
const pagesCollection = db.get('Pages');
pagesCollection.createIndex({ pageID: 1 });

/** add
 * @description Adds a new page
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {Object} result.token
 * @return {string} result.message
 */
const add = async () => {
  let response = { success: false };

  try {
    const pageID = randomString();

    await pagesCollection.insert({
      pageID,
      text: '',
    });

    const token = jwt.createToken(pageID);

    response.token = token;
    response.success = true;

    return response;
  } catch (error) {
    response.message = messages.error;
    throw new Error(response);
  }
};

/** get
 * @description Gets a page's finalText
 *
 * @return {Object} result
 * @return {boolean} result.success
 * @return {Object} result.text
 * @return {string} result.message
 */
const get = async pageID => {
  let response = { success: false };

  try {
    const page = await pagesCollection.findOne({ pageID });

    response.text = page.text;
    response.success = true;
    return response;
  } catch (error) {
    response.message = messages.error;
    throw new Error(response);
  }
};


module.exports = { add, get };
