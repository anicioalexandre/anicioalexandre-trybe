const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = () => {
  const containerjoke = document.querySelector('#jokeContainer');
  return fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => (containerjoke.innerHTML = data.joke));
};

window.onload = () => fetchJoke();
