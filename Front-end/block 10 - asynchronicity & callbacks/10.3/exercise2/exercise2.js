const newPromise = () => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  const sum = arr.map((num) => num * num).reduce((total, num) => total + num);
  return new Promise((resolve, reject) => {
    if (sum < 8000) {
      resolve(`Sucess, we have got ${sum}! :)`);
    } else {
      reject(`Error, we have got ${sum}! :(`);
    }
  });
};
newPromise()
  .then((response) => console.log(response))
  .catch((response) => console.log(response));
