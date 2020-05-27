const somar = (a, b) => {
  return a + b;
}; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const randomNum = () => Math.floor(Math.random() * 100);
const caixaAlta = (str) => str.toUpperCase();
const primeiraLetra = (str) => str.charAt(0);
const concStr = (str1, str2) => str1 + str2;

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  randomNum,
  caixaAlta,
  primeiraLetra,
  concStr,
};
