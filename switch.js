const prompt = require("prompt-sync")();

let score = prompt("what is your test score?");

let result = Math.floor(score/10);
switch(result){
case 0: console.log("fail");
	break;
case 1: console.log("fail");
	break;
case 2: console.log("fail");
	break;
case 3: console.log("fail");
	break;
case 4: console.log("pass");
	break;
case 5: console.log("credit");
	break;
case 6: console.log("credit");
	break;
case 7: console.log("good");
	break;
case 8: console.log("good");
	break;
case 9: console.log("excellent");
	break;
case 10: console.log("excellent");
	break;
default: console.log("Wrong score input");
	break;
};

/*
let score = 60;

(score < 50)? console.log("Fail"):console.log("pass");
*/
