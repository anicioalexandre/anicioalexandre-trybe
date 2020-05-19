function myIndexOf(arr, item) {
  let number = -1;
  arr.forEach((num, index) => {
    if (num === item) return (number = index);
  });
  return number;
}
describe('myIndex', () => {
  it('returning the correct value', () => {
    const arr = [1, 2, 3, 4];
    expect(myIndexOf(arr, 3)).toBe(2);
    expect(myIndexOf(arr, 5)).toBe(-1);
  });
});
