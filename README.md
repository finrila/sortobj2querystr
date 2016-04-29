# sortobj2querystr
QueryString of sort by Object

###Install
    npm install sortobj2querystr --save

###Usage
    @param obj {Object} source
    @param encode {Boolean} true/false default false

```javascript
'use strict';

let sortobj2querystr = require('./index');

let obj = {
  b: 'b value',
  c: 'c & value',
  a: 'a=test'
};

let result = sortobj2querystr(obj);

console.log(result); //-> a=a%3Dtest&b=b%20value&c=c%20%26%20value

```