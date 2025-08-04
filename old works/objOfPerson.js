//create
const person = {
	name : "Chinedu",
	age : 16,
	gender : "SheMale",
	password : "34567"
};

//update
person.color = "black";
person.password = "newpassword1234";


//delete
delete person.name


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


//read
//console.log(person)

//process.stdout.write(person)

