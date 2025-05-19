const input = require("prompt-sync");
const prompt = input();

let userin = Number(prompt("Enter an int: "));

let output = " ";

for(let counter = 1; counter <= userin; counter++){

  for(let count = 1; count <= counter; count++){
	output += "*" + " ";
    console.log(output);
  }
}

