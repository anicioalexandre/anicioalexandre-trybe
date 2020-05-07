const removeVowels = (word) => {
  if (typeof word === 'string') {
    const characters = word.split('');
    let results = '';
    let count = 0;

    for (letter of characters) {
      if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
      ) {
        count += 1;
        letter = count;
        results += letter;
      } else results += letter
    } return results;

  } throw new Error('A entrada deve ser do tipo string.')
};


const parameter = 'Dayane';
const result = 'D1y2n3';

// testes:
const assert = require('assert');
assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);
assert.strictEqual(removeVowels('parameter'), 'p1r2m3t4r');
assert.throws(() => {removeVowels(123456)}, /^Error: A entrada deve ser do tipo string./);