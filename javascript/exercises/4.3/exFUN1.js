//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.
function trueorFalse(palavra) {
  if ( palavra == palavra.split("").reverse().join("")){
    return true;
  }
  return false;
}
console.log(trueorFalse("arara"));

