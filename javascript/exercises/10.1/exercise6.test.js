function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('myFizzBuzz', () => {
  it('divisible by 3 and 5', () => {
    expect(myFizzBuzz(1500)).toEqual('fizzbuzz');
  });
  it('divisible by 3', () => {
    expect(myFizzBuzz(999)).toEqual('fizz');
  });
  it('divisible by 5', () => {
    expect(myFizzBuzz(2855)).toEqual('buzz');
  });
  it('not divisible by 3 and 5', () => {
    expect(myFizzBuzz(404)).toEqual(404);
  });
  it('not a number', () => {
    expect(myFizzBuzz([])).toBeFalsy;
    expect(myFizzBuzz('15')).toBeFalsy;
  });
});
