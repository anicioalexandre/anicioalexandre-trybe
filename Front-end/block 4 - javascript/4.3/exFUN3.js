//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let lista = [2, 4, 6, 7, 10, 0, -3];
let result = 0;

function menorValor(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] <= array[j] && array[i] < array[result]) {
        result = i;
      }
    }
  }
  return result;
}

console.log(menorValor(lista));