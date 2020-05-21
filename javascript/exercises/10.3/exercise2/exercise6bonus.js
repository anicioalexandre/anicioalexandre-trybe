const newPromise = () => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  const sum = arr
    .map((num) => num * num)
    .reduce((total, num) => total + num, 0);
  return new Promise((resolve, reject) => {
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject(`Error, we have got more than 8000 at the beginning! :(`);
    }
  });
};

const arrDivided = (sum) =>
  [2, 3, 5, 10].map((divisor) => Math.floor(sum / divisor));
const arrSum = (arr) => arr.reduce((total, num) => total + num, 0);

const transformingToAsync = async () => {
  try {
    const initialSum = await newPromise();
    const array = await arrDivided(initialSum);
    const finalSum = await arrSum(array);
    console.log(finalSum);
  } catch (response) {
    console.log(response);
  }
};

transformingToAsync();
