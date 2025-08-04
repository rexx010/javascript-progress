let array = [2, 3, 4, 5, 6];

let obj = {
	color: "blue",
	age: 12,
	isValid:true
}

/*for loop
for(let index = 0; index < array.length; index++){
	console.log(array[index]);
}
*/

//for of
//for(let value of obj){
//	console.log(value);
//}

/*
//for in
for(let key in obj){
	console.log(obj[key]);
}


//for index
for(let index in array){
	console.log(array[index]);
}*/


for(let index = 0; index < array.length; index++){
	console.log("I am the index of the array", index)
	console.log("I am the value of the array", array[index])
}


for(let index in array){
	console.log("I am the index of the array", index)
	console.log("I am the value of the array", array[index])
}