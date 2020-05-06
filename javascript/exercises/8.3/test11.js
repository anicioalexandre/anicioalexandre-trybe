const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// tests:
assert.strictEqual(isAbove(2, 3), false);
assert.strictEqual(isAbove(2, 1), true);
