'use strict';
var test = require('ava');
var arrayInverse = require('./');

test(function (t) {
  var arr = [[1, 2, 3], [1, 1, 1]];
  t.assert(arrayInverse(arr).toString() === '1,1,2,1,3,1');
});
