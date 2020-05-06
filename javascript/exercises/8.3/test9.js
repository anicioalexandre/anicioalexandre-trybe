const assert = require('assert');

function change(param) {
  return !param;
}

// tests:
assert.ok(change(true) == false); // Utilize assert.ok() para testar uma condição

assert.ok(change(true), false);