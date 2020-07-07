function secondThirdSmallest(array) {
  let results = []
  array.sort((x, y) => x - y);
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

// testes:
const assert = require('assert');
assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);