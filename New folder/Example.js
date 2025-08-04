// class ClassName{
//     constructor(parameter1, parameter2) {
//         // constructor logic
//     }
// }

class User{
    #password; // private field
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#password = "defaultPassword"; // private field initialization
    }
    checkPassword(password) {
        return this.#password === password; // private field access
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
    setPassword(newPassword) {
        this.#password = newPassword; // private field access
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}