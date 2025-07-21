'use strict';

const complexStylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceItems = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str !== '');

  const parsed = {};

  sourceItems.forEach((item) => {
    const [key, value] = item.split(':');

    if (key && value !== undefined) {
      parsed[key.trim()] = value.trim();
    }
  });

  return parsed;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
