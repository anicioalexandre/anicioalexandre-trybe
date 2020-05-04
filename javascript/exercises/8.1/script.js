const fatorialFunction = (num) => {
  if (num <= 1)
    return 1;
  else
    return num * fatorialFunction(num - 1);
}
fatorialFunction(4);
//24
