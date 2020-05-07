const assert = require('assert');

const multiple = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0 || arr[i] % 11 === 0) {
      return false;
    }
    return true;
  }
}

assert.equal(typeof multiple, 'function');
assert.strictEqual(multiple([3]), false);
assert.strictEqual(multiple([3, 5]), false);
assert.strictEqual(multiple([3, 5, 7]), false);
assert.strictEqual(multiple([3, 5, 7, 11]), false);
assert.strictEqual(multiple([3, 2, 5, 4, 7, 11]), false);
assert.strictEqual(multiple([2, 4, 8, 16]), true);