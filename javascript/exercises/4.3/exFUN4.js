//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let lista = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maisCaracteres(array) {
  let contagemLetras  = 0
  let result = null;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > contagemLetras) {
    contagemLetras = array[i].length;
    result = i
    }
  }
  return array[result];
}

console.log(maisCaracteres(lista));

