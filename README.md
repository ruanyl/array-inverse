array-inverse
========
[![build status](https://secure.travis-ci.org/ruanyl/array-inverse.svg)](http://travis-ci.org/ruanyl/array-inverse)
[![NPM version](https://badge.fury.io/js/array-inverse.svg)](http://badge.fury.io/js/array-inverse)

inverse an array

## Installation

This module is installed via npm:

``` bash
$ npm install array-inverse
```

## Example Usage

``` js
var arrayInverse = require('array-inverse');

var arr = [
            [1, 2, 3],
            [1, 1, 1]
          ];

// return [[1, 1], [2, 1], [3, 1]];
arrayInverse(arr);
```
