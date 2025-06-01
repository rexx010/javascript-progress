const prompt = require("prompt-sync")();

let left_operand = Number(prompt("Enter the left variable: "));
let right_operand = Number(prompt("Enter the right variable: "));
let operator = prompt("Enter the operator variable: ");

let ans = 0;

if(operator == "+"){
ans = left_operand + right_operand;
console.log(ans);
}else if(operator == "-"){
ans = right_operand - left_operand;
console.log(ans);
}else if(operator == "*"){
ans = left_operand * right_operand;
console.log(ans);
}else if(operator == "/"){
ans = left_operand / right_operand;
console.log(ans);
}else if(operator == "%"){
ans = NaN;
console.log(ans);
}
