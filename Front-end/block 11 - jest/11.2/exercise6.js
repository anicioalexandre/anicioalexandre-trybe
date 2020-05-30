const fetch = require('node-fetch');

const fetchAPI = (url) => {
  fetch(url)
    .then((data) => data.json())
    .then((json) => json.message)
    .catch('error');
};

fetchAPI('https://dog.ceo/api/breeds/image/random');

module.exports = { fetchAPI };
