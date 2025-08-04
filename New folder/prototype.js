const person = {
    name: "damilare",
    age: 20,
    greet () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const Employee = Object.create(person)
Employee.jobTitle = "Software Engineer";


Employee.greet();

