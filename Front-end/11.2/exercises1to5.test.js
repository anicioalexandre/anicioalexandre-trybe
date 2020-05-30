const randomthing = require('./math');

describe('random number', () => {
  it('#1', () => {
    expect.assertions(2);
    const randomMock = jest.spyOn(randomthing, 'randomNum').mockReturnValue(10);
    expect(randomMock()).toBe(10);
    expect(randomMock).toHaveBeenCalledTimes(1);
  });
  it('#2', () => {
    expect.assertions(3);
    const randomMock = jest
      .spyOn(randomthing, 'randomNum')
      .mockReturnValue(50)
      .mockImplementationOnce((a, b) => a / b);
    expect(randomMock(5, 5)).toBe(1);
    expect(randomMock()).toBe(50);
    expect(randomMock).toHaveBeenCalledTimes(3);
    randomMock.mockClear(); // resetando chamadas
  });
  it('#3', () => {
    expect.assertions(5);
    const randomMock = jest
      .spyOn(randomthing, 'randomNum')
      .mockReturnValueOnce(101)
      .mockImplementation((a, b, c) => a * b * c);
    expect(randomMock()).toBe(101); // retornando uma vez 101
    expect(randomMock(5, 5, 5)).toBe(125);
    expect(randomMock(1, 5, 10)).toBe(50);
    expect(randomMock).toHaveBeenCalledTimes(3);
    randomMock.mockReset(); // resetando implementações anteriores
    randomMock.mockImplementation((a) => 2 * a); // adicionando uma nova
    expect(randomMock(5)).toBe(10);
  });
  it('#4.1', () => {
    // expect.assertions(3);
    const caixaAltaMock = jest
      .spyOn(randomthing, 'caixaAlta')
      .mockImplementation((str) => str.toLowerCase());
    expect(caixaAltaMock('CAIXA ALTA')).toBe('caixa alta');
    expect(caixaAltaMock).toHaveBeenCalledTimes(1);
    caixaAltaMock.mockRestore(); // restaurando
    expect(randomthing.caixaAlta('caixa alta')).toBe('CAIXA ALTA');
  });
  it('#4.2', () => {
    // expect.assertions(3);
    const primeiraLetraMock = jest
      .spyOn(randomthing, 'primeiraLetra')
      .mockImplementation((str) => str.charAt(str.length - 1));
    expect(primeiraLetraMock('CAIXA')).toBe('A');
    expect(primeiraLetraMock).toHaveBeenCalledTimes(1);
    primeiraLetraMock.mockRestore(); // restaurando
    expect(randomthing.primeiraLetra('caixa alta')).toBe('c');
  });
  it('#4.3', () => {
    // expect.assertions(3);
    const concStrMock = jest
      .spyOn(randomthing, 'concStr')
      .mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    expect(concStrMock('anda', 'com', 'fé')).toBe('andacomfé');
    expect(concStrMock).toHaveBeenCalledTimes(1);
    concStrMock.mockRestore(); // restaurando
    expect(randomthing.concStr('eu', 'vou')).toBe('euvou');
  });
});
