const input = require("prompt-sync");
const prompt = input();


let gallons = 0;
let miles = 0;
let total = 0;
let gallon = 0;
let quit = 0;

while(quit != -1){
	gallon = prompt('Enter gallons used: ')
	mile = prompt('Enter miles drivened: ')
	
	quit = prompt('press -1 to end:')

	gallons += gallon 
	miles += mile
	}
total = miles / gallons

console.log("The overall average miles/gallon was", total)