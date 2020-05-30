//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let n = 5;

function subtracaoFatorial(numero) {
  let contagem = null;
  for (let i = 0; i < n; i += 1 ) {
  contagem += n-i;
  }
  return contagem
}
console.log(subtracaoFatorial(n));
