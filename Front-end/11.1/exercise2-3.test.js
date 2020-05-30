const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: `User with ${id} not found.` });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('testing getUserName', () => {
  it('check resolve', () => {
    expect.assertions(1);
    return expect(getUserName(5)).resolves.toBe('Paul');
  });
  it('check reject', () => {
    expect.assertions(1);
    return expect(getUserName(6)).rejects.toEqual({
      error: `User with 6 not found.`,
    });
  });
});

describe('testing getUserName using async/await', () => {
  it('check resolve', async () => {
    expect.assertions(1);
    const userName = await getUserName(5);
    expect(userName).toBe('Paul');
  });
  it('check reject', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: `User with 6 not found.` });
    }
  });
});

describe('testing getUserName using async/await and resolves/rejects', () => {
  it('check resolve', async () => {
    expect.assertions(1);
    await expect(getUserName(5)).resolves.toBe('Paul');
  });
  it('check reject', async () => {
    expect.assertions(1);
    await expect(getUserName(6)).rejects.toEqual({
      error: `User with 6 not found.`,
    });
  });
});
