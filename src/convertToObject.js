'use strict';

const complexStylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str !== '');

  const sourceObj = {};

  sourceArr.forEach((item) => {
    const [key, value] = item.split(':');

    sourceObj[key.trim()] = value.trim();
  });

  return sourceObj;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
