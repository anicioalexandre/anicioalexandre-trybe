const newPromise = () => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  const sum = arr.map((num) => num * num).reduce((total, num) => total + num);
  return new Promise((resolve, reject) => {
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject();
    }
  });
};
newPromise()
  .then((sum) => {
    console.log([2, 3, 5, 10].map((divisor) => Math.floor(sum / divisor)));
  })
  .catch(() =>
    console.log('É mais de oito mil! Essa promise deve estar quebrada! :(')
  );
