const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('checking items in github repo list', () => {
  it('checking if it contains todolist and meme gen', async () => {
    expect.assertions(2);
    const listRepos = await getRepos(
      'https://api.github.com/users/tryber/repos'
    );
    expect(listRepos).not.toContain('sd-01-week4-5-project-todo-list');
    expect(listRepos).not.toContain('sd-01-week4-5-project-meme-generator');
  });
});
