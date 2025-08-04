const prompt = require("prompt-sync")();

let left_operand = Number(prompt("Enter the left variable: "));
let right_operand = Number(prompt("Enter the right variable: "));
let operator = prompt("Enter the operator variable: ");

let ans = 0;

switch(operator){
case "+": ans = left_operand + right_operand;
console.log(ans);
break;

case "-": ans = right_operand - left_operand;
console.log(ans);
break;

case "*": ans = left_operand * right_operand;
console.log(ans);
break;

case "/": ans = left_operand / right_operand;
console.log(ans);
break;

default: ans = NaN;
console.log(ans);
}