const fecthFun = require('./exercise6');

describe('testing fetch', () => {
  const fetchMock = jest.spyOn(fecthFun, 'fetchAPI');
  afterEach(fetchMock.mockReset);
  it('fetch resolves', async () => {
    expect.assertions(2);
    fetchMock.mockResolvedValue('deu bom');
    await expect(fetchMock()).resolves.toBe('deu bom');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  it('fetch rejects', async () => {
    expect.assertions(2);
    fetchMock.mockRejectedValue('deu ruim');
    await expect(fetchMock()).rejects.toBe('deu ruim');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
