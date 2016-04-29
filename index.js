'use strict';

let getkeys = require('getkeys');

/*
 * QueryString of sort by Object 
 * @param obj {Object}
 * @param encode {Boolean} true/false default false
 * @return {string}
 */
module.exports = function(obj, encode) {
  let keys = getkeys(obj).sort();
  let result = [];
  let key;
  let value;
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    value = obj[key];
    result.push(key + '=' + (encode ? encodeURIComponent(value) : value));
  }
  return result.join('&');
};