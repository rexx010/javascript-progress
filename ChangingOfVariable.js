const input = require("prompt-sync");
const prompt = input();

let Var1 = Number(prompt("Enter a number: "));
let Var2 = Number(prompt("Enter a number: "));
let Var3 = Number(prompt("Enter a number: "));
let Var1copy = Var1;

Var1 = Var2;
Var2 = Var3;
Var3 = Var1copy;

console.log(Var1, Var2, Var3);