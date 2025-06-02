const input = require("prompt-sync");
const prompt = input();

let chances = 2;
let counter = 0;
let correctAnswer = 0;
let wrongAnswer= 0;


for(let counter = 0; counter <= 10; counter++){

let firstNumber = Math.floor(Math.random() * 100);
let secondNumber = Math.floor(Math.random() * 100);
let result = 0;



if(secondNumber > firstNumber){
let firstcopy = firstNumber;
firstNumber = secondNumber;
secondNumber = firstcopy;

result = firstNumber - secondNumber;
}else{
result = firstNumber - secondNumber;
}

let attempted = 0;
while(attempted < 2){

console.log("The first number is ", firstNumber, "and the second number is", secondNumber);

let userChoice = Number(prompt("what is the answer?: "));

if(result == userChoice){
console.log("correct");
correctAnswer++;
attempted = 2;
}
if(result != userChoice){
console.log("invalid answer");
attempted = attempted + 1;
}


}


}
console.log("correct answer is", correctAnswer,'/ 10');
//console.log("wrong answer is", wrongAnswer);