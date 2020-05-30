const greaterThanTen = (array) => {
  let results = [];
  for (num of array) {
    if (num > 10) {
      results.push(num);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

// testes:
const assert = require('assert');
assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);

