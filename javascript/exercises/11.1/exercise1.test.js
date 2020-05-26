const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
describe('uppercase()', () => {
  it('testando uppercase', (done) => {
    expect.assertions(1);
    uppercase('abc', (resultado) => {
      expect(resultado).toEqual('ABC');
      done();
    });
  });
});
