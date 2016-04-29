'use strict';

let sortobj2querystr = require('./index');

let obj = {
  b: 'b value',
  c: 'c & value',
  a: 'a=test'
};

let result = sortobj2querystr(obj, true);

console.log(result); //-> a=a%3Dtest&b=b%20value&c=c%20%26%20value