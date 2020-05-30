//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.,
let lista = [2, 3, 0, 7, 10, 1];
let result = 0;

function maiorValor(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] >= array[j] && array[i] > array[result]) {
        result = i;
      }
    }
  }
  return result;
}

console.log(maiorValor(lista));