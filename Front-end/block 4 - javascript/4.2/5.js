//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 7;
let i = 1;
console.log(" ".repeat(n/2 - i/2) + "*".repeat(i) + " ".repeat(n/2 - i/2));

for (i = 3; i < n; i += 2) {
    console.log(" ".repeat(n/2 - i/2) + "*" + " ".repeat(i-2) + "*" + " ".repeat(n/2 - i/2));
    
}

console.log("*".repeat(n));