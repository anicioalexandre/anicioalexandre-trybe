// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let lista = [2, 3, 2, 5, 8, 2, 3];

function repeticao(array) {
  let maiorArray = [];
  let index = 0;
  for (let i = 0; i < array.length; i += 1) {
    let ComparacaoArray = []
    for (j = 0; j < array.length; j += 1) {
      if (array[i] == array[j]) {
        ComparacaoArray.push(array[i])
      }
    }
    if (ComparacaoArray.length > maiorArray.length) {
      maiorArray = ComparacaoArray;
    }
  }

  return maiorArray[0];
}
console.log(repeticao(lista));
