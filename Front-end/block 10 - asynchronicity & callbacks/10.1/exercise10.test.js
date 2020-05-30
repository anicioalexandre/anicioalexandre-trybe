const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

it('obj1 and obj2 are equals', () => {
  expect(obj1).toEqual(obj2);
});
it('obj3 are diff from others', () => {
  expect(obj3).not.toEqual(obj1);
  expect(obj3).not.toEqual(obj2);
});
