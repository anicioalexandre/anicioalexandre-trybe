function isAbove(num1, num2) {
  return num1 > num2;
}

it('falsy or truthy', () => {
  expect(isAbove(10, 5)).toBeTruthy;
  expect(isAbove(10, 50)).toBeFalsy;
  expect(isAbove(50, 50)).toBeFalsy;
});
