const input = require("prompt-sync");
const prompt = input();



const begin = function(let year, let month, let day){
const start = new Date(year, month, day);
return start;
}

const flowDate = function(let year, let month, let day){
const start = new Date(year, month, day);
const stop = start.plusDays(5);
return "your flow starts on the "+start+"\n it ends on the "+stop;
}

const finish = function(let year, let month, let day, let cycle){
const check = new Date(year, month, day);
const end = check.plusDays(cycle);
return end;
}

const ovulation = function(let year, let month, let day, let cycle){
const starting = new Date(year, month, day);
const ending = starting.plusDays(cycle);
const ovuStart = ending.minusDays(16);
const ovuEnd = ending.minusDays(12);
return "your ovulation starts on the "+ovuStart+"\n it ends on the "+ovuEnd;
}

const fertileLength = function(let year, let month, let day, let cycle){
const started = new Date(year, month, day);
const ended = started.plusDays(cycle);
const ferileStart = ended.minusDays(21);
const ferileEnd = ended.minusDays(12);
return "your fertility starts on the "+ferileStart+"\n it ends on the "+ferileEnd;
}

const safeperiod = function(let year, let month, let day, let cycle){
const started = new Date(year, month, day);
const ended = started.plusDays(cycle);
const ferileStart = ended.minusDays(21);
const ferileEnd = ended.minusDays(12);
return "All days are safe to have fun excluding days within "+ferileStart+" and "+ferileEnd;
}





















let message = 'Welcome to Phasegate Menstrual cycle calculator...\npress any of the following to perform an action\n1: to check calculate the date of your menstrual cycle.\n0: to exit the app.';

let condition = true;
while(condition){
console.log(message);
let userChoise = prompt();
switch(userChoise){
case '1':
	console.log("Welcome to your calculater \n Enter your start date in this order(year, month, day): ");
	let year = Number(prompt());
	let month = Number(prompt());
	let day = Number(prompt());
	console.log();

	console.log("How many days is your cycle?: ");
	let cycle = Number(prompt());
	console.log();


	const status = begin(year, month, day);
	const end = finish(year, month, day, cycle);
	let flow = flowDate(year, month, day);
	let ovu = ovulation(year, month, day, cycle);
	let fertile = fertileLength(year, month, day, cycle);
	let safety = safeperiod(year, month, day, cycle);
	console.log();

	console.log("Your cycle starts on the "+status);
	console.log();

	console.log("and your cycle ends on the "+end);
	console.log();

	console.log(flow);
	console.log();


	console.log(ovu);
	console.log();

	console.log(fertile);
	console.log();

	console.log(safety);
	console.log(); 
	break;

case '0':
	condition = false;
	break;
default:
	console.log("invalid prompt... Try again");
	break;

}






}
