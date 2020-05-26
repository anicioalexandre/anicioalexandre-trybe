function randomNumber() {
  return Math.floor(Math.random() * 100);
}
function isDivisible(number) {
  return randomNumber() % number === 0;
}

describe('testName', () => {
  it('testDescription', () => {
    expect.assertions(5);
    randomNumber = jest
      .fn()
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(50)
      .mockReturnValueOnce(15)
      .mockReturnValueOnce(16)
      .mockReturnValue(15);
    isDivisible(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(2)).toBe(false);
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(2)).toBe(false);
  });
});

// randomNumber = jest.fn();

// isDivisible();
// expect(randomNumber).toHaveBeenCalled();
