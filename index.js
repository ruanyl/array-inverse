'use strict';

function arrayInverse(arr) {
  var inversed = arr[0].map(function(col, i) {
    return arr.map(function(row) {
      return row[i];
    });
  });

  return inversed;
}

module.exports = arrayInverse;
