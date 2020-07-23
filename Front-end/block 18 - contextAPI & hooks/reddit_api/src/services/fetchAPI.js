

const fetchAPI = (search) =>
  fetch(`https://www.reddit.com/r/${search}.json`).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
  
export default fetchAPI;
// console.log(fetchAPI('subreddit'))
