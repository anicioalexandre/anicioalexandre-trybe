const sumRandomArr = () => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  const sum = arr
    .map((num) => num * num)
    .reduce((total, num) => total + num, 0);

  if (sum < 8000) throw new Error();
  return sum;
};

const arrDivided = (sum) =>
  [2, 3, 5, 10].map((divisor) => Math.floor(sum / divisor));
const arrSum = (arr) => arr.reduce((total, num) => total + num, 0);

const transformingToAsync = async () => {
  try {
    const initialSum = await sumRandomArr();
    const array = await arrDivided(initialSum);
    const finalSum = await arrSum(array);
    console.log(finalSum);
  } catch (e) {
    console.log('Error, we have got more than 8000 at the beginning! :(');
  }
};

transformingToAsync();
