const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// testes:
assert.equal(sum(4, 5), 9, 'Error');
assert.equal(sum(0, 0), 0, 'Error');
assert.throws(() => {sum(4, '5')}, /^Error: parameters must be numbers/)
