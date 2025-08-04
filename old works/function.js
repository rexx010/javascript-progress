/*there are two way of creating functions
1. function declaration
2. function expression*/

//we call the name (greet)whenever we need the function


/*function greet(){
	console.log("Hello")

};
*/

/*function greet(){
	let reply = "hello"
	return reply;
};
*/


const greet = function(numberOne, name){
	let number = numberOne +" "+name
	return number;
}



let userName = "Ugbo";
let number = 12;

console.log(greet(number, userName));