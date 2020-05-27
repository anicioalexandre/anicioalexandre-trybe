const math = require('./math');

describe('testName', () => {
  it('#somar', () => {
    // testando a implementação original, o mock e a restauração da função original
    expect.assertions(5);

    // implementação original
    expect(math.somar(1, 2)).toBe(3);

    // criando o mock e substituindo a implementação para uma subtração
    const mockSomar = jest
      .spyOn(math, 'somar')
      .mockImplementation((a, b) => a / b)
      .mockImplementationOnce((a, b) => a + b)
      .mockImplementationOnce((a, b) => a - b);

    expect(mockSomar(5, 1)).toBe(6);
    expect(mockSomar(4, 1)).toBe(3);
    expect(mockSomar).toHaveBeenCalledTimes(2);

    // restaurando a implementação original
    math.somar.mockRestore();
    expect(math.somar(1, 2)).toBe(3);
  });
  it('subtrair', () => {
    expect.assertions(2);
    const mockSub = jest
      .spyOn(math, 'subtrair')
      .mockImplementation((a, b) => 2 * a - b)
      .mockReturnValueOnce(15);
    expect(mockSub(200, 5)).toBe(15);
    math.subtrair.mockRestore();
    expect(math.subtrair(20, 5)).toBe(15);

  });
  it('multiplicar', () => {
    expect.assertions(2);
    const mockMult = jest.spyOn(math, 'multiplicar').mockReturnValueOnce(10);
    expect(mockMult(5, 2)).toBe(10);
    expect(mockMult).toHaveBeenCalled();
  });
  it('somar', () => {
    expect.assertions(3);
    const mockSoma = jest
      .spyOn(math, 'somar')
      .mockImplementation((a, b) => a + b);
    expect(mockSoma(5, 4)).toBe(9);
    expect(mockSoma).toHaveBeenCalled();
    expect(mockSoma).toHaveBeenLastCalledWith(5, 4);
  });
  it('dividir', () => {
    expect.assertions(7);
    const mockDiv = jest
      .spyOn(math, 'dividir')
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
    expect(mockDiv(4, 2)).toBe(2);
    expect(mockDiv).toHaveBeenLastCalledWith(4, 2);
    expect(mockDiv(25, 5)).toBe(5);
    expect(mockDiv).toHaveBeenLastCalledWith(25, 5);
    expect(mockDiv(150, 10)).toBe(15);
    expect(mockDiv).toHaveBeenLastCalledWith(150, 10);
    expect(mockDiv).toHaveBeenCalledTimes(3);
  });
});
