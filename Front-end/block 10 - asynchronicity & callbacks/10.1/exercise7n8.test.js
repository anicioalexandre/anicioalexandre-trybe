const thereIs = 'something';
function thereIs2() {}

it('variável definida', () => {
  expect(typeof thereIs).not.toBe(undefined);
  expect(typeof thereIs2).not.toBe(undefined);
  expect(typeof thereIs2).toBe('function');
});
