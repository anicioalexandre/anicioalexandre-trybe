const file = require('./exercise bonus');

describe('testing fetch', () => {
  const fetchMock = jest.spyOn(file, 'fetchJoke');
  afterEach(fetchMock.mockReset);
  it('fetch resolves', async () => {
    expect.assertions();
    fetchMock.mockImplementation(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: '7h3oGtrOfxc',
            joke: 'Whiteboards ... are remarkable.',
            status: 200,
          }),
      });
    });
    await expect(fetchMock()).resolves.toBe('deu bom');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  // it('fetch rejects', async () => {
  //   expect.assertions(2);
  //   fetchMock.mockRejectedValue('deu ruim');
  //   await expect(fetchMock()).rejects.toBe('deu ruim');
  //   expect(fetchMock).toHaveBeenCalledTimes(1);
  // });
});
