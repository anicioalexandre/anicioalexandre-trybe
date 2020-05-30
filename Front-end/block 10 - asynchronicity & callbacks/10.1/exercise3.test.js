function mySum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

describe('mySum', () => {
  it('returning the correct value', () => {
    const arr = [1, 2, 3, 4];
    const arr2 = [1, -2, -3, 4];
    expect(mySum(arr)).toBe(10);
    expect(mySum(arr2)).toBe(0);
  });
});
