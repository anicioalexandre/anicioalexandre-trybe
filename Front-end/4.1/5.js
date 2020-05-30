let a = "oi";
let b = 40;
let c = 30;


if (typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number') {
    console.log("erro");
}
else if ( a + b + c == 180) {
    console.log("true");
}
else {
    console.log("false");
}