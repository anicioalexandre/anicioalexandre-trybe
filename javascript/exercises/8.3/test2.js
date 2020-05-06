'use strict'
const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// tests:
const array = [1, 2, 3, 4];
assert.strictEqual(myIndexOf(array, 3), 2)
assert.strictEqual(myIndexOf(array, 5), -1)
