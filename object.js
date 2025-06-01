const person ={
	firstname: "elon",
	lastname: "dami",
	age: 35,
	address: {
		street: "yaba",
		city: "lagos",
		country: 'Nigeria'
}
}


person.firstname = 'Adeiga';
person.company = 'Codebase';
//delete person.age;


console.log(person)

console.log(person.address.city)

console.log('age' in person)

for(let prop in person){
console.log(prop)
}

for(let prop in person){
console.log(person[prop])
}

let hey = Object.values(person)
console.log(hey)
