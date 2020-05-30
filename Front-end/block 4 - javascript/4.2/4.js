//Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;

for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat(n/2 - i/2) + "*".repeat(i) + " ".repeat(n/2 - i/2));
    
}