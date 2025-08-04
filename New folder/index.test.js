const {getEvenNumbers, createCounter} = require("./function");

test("that the function returns even numbers", () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//Arrange
    const result = getEvenNumbers(arrayOfNumbers);//Act
    expect(result).toEqual([2, 4, 6, 8, 10]);//Assert
})

describe("createCounter", () => {
    test("that the initial count is 0", () => {
        const counter = createCounter() // Arrange
        expect(counter.getCount()).toBe(0) // Assert
    })
    test("that the count increases by 1", () => {
        const counter = createCounter() // Arrange
        counter.increament() // Act
        expect(counter.getCount()).toBe(1) // Assert
    })
    test("that the count increases by 2", () => {
        const counter = createCounter() // Arrange
        counter.increament() // Act
        counter.increament() // Act
        expect(counter.getCount()).toBe(2) // Assert
    })
    test("that the count increases by 3", () => {
        const counter = createCounter() // Arrange
        counter.increament() // Act
        counter.increament() // Act
        counter.increament() // Act
        expect(counter.getCount()).toBe(3) // Assert
    })
    test("that the count decreases by 1", () => {
        const counter = createCounter() // Arrange
        counter.increament() // Act
        counter.increament() // Act
        counter.decreament() // Act
        expect(counter.getCount()).toBe(1) // Assert
    })
    test("that the count decreases by 2", () => {
        const counter = createCounter() // Arrange
        counter.increament() // Act
        counter.increament() // Act
        counter.decreament() // Act
        counter.decreament() // Act
        expect(counter.getCount()).toBe(0) // Assert
    })
    test("that the count resets to 0", () => {
        const counter = createCounter() // Arrange
        counter.increament() // Act
        counter.increament() // Act
        counter.increament() // Act
        counter.increament() // Act
        counter.reset() // Act
        expect(counter.getCount()).toBe(0) // Assert
    })
})    