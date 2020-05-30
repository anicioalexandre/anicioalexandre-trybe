function sum(...a) {
  return a.reduce((total, num) => {
    if (typeof num !== 'number') throw new Error('parameters must be numbers');
    return total + num;
  }, 0);
}

describe('sum', () => {
  it('sum correctly', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 15, 21, 68)).toBe(104);
  });

  it('throwing errors', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('throw error message', () => {
    expect(() => {
      sum([], {});
    }).toThrow(/parameters must be numbers/);
  });
});
