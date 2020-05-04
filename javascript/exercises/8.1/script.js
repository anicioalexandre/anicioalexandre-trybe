const fatorialFunction = (num) => {
  if (num <= 1)
    return 1;
  else
    return num * fatorialFunction(num - 1);
}
//fatorialFunction(4);
//24

//BONNUS: all in one line
const fatorialBonus = num => (num <= 1) ? 1 : num * fatorialBonus(num - 1);
console.log(fatorialBonus(4));
