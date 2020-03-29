n = 17;
let primo = "É primo"
for (let i = 2; i < n/2; i += 1) {
    if (n % i == 0) {
        primo = "Não é primo";
        break
    }

}
console.log((primo));

