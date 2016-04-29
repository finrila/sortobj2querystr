'use strict';

let getkeys = require('getkeys');

/*
 * queryString of sort by Object
 * @param obj {Object}
 * @return {string}
 */
module.exports = function(obj) {
  let keys = getkeys(obj).sort();
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push(keys[i] + '=' + encodeURIComponent(obj[keys[i]]));
  }
  return result.join('&');
};