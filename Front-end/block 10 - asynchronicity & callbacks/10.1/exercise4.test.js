function myRemove(arr, item) {
  return arr.filter((num) => num !== item);
}

describe('myRemove', () => {
  it('checking the correct return', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 4)).toEqual([1, 2, 3]);
    expect(myRemove(arr, 4)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
  it('checking if the array remains the same', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
