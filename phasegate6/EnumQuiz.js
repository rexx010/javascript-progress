const input = require("prompt-sync");
const prompt = input();

const option1 = {Q: "1 + 1 = 2?",
opt: "(a)True,(b)False", 
ans: "a"};

const option2 = {Q: "Is Semicolon phasegate task easy?",
opt: "(a)False,(b)True", 
ans: "b"};

const option3 = {Q: "Is Tobi and Ope a nice person?",
opt: "(a)False,(b)True", 
ans: "b"};

const option4 = {Q: "Programming is hard?",
opt: "(a)True, (b)False", 
ans: "a"};

const option5 = {Q: "Is 100 * 100 = 1?",
opt: "(a)True, (b)False", 
ans: "b"};

const option6 = {Q: "Nigeria is a great country?",
opt: "(a)No, (b)Yes", 
ans: "b"};

const option7 = {Q: "Will programming earn you money to sustain yourself?",
opt: "(a)No, (b)Yes", 
ans: "b"};

const option8 = {Q: "Money is the root of all evil?",
opt: "(a)True, (b)False", 
ans: "b"};

const option9 = {Q: "Semicolon have 5 cohort running presently?",
opt: "(a)False, (b)True", 
ans: "a"};

const option10 = {Q: "Will you give me a great score for this?",
opt: "(a)True, (b)False", 
ans: "a"};

const question = [option1, option2, option3, option4, option5, option6, option7, option8, option9, option10];

//console.log(question);
const Question = function(choice, type, question){

for(let count = 0; count < question.length; count++){
if(choice === count){
console.log(type);
console.log(type.opt);
}

}
}






let message = "Welcome to Enum quiz";
let message1 = "press 1 to start or 0 to quit:";
console.log(message);
console.log(message1);

let hey = true
while(hey){
let userChoice = prompt("");
switch(userChoice){
case '1':
	let choice = Number(prompt("press a number between 1 - 10 to choose a question: "));
	let type = prompt("type an option: ");
	//console.log(question);

	console.log(Question(choice, type));
case '0':
	hey = false;
	console.log("goodbye");
default:
	console.log("invalid input");





}
}