const greetPeople = (people) => people.map((person) => `Hello ${person}`);

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// testes:
const assert = require('assert');
assert.deepStrictEqual(greetPeople(parameter), result);

