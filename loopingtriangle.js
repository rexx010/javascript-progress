const input = require("prompt-sync");
const prompt = input();

let userin = Number(prompt("Enter an int: "));

let output = " ";

for(let counter = 0; counter < userin; counter++){

  for(let count = 0; count <= counter; count++){
	output += 1 
    console.log(output);
  }
}

