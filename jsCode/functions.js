// function higherfunction() {
//     console.log("higher function called");
// }
// function lowerfunction(callback) {
//     console.log("lower function called");
//     callback()
// }
// lowerfunction(higherfunction);


// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function operation(callBack,a, b) {
//     return callBack(a, b);
// }
//
// console.log(operation(add,2,3))
// console.log(operation(multiply,3,4))


const getEvenNumbers = function(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 === 0) {
            result.push(array[index]);
        }
    }
    return result;
    // return array.filter((num)=>{return num % 2 === 0});
    // return array.filter(num => num % 2 === 0);
    // return array.filter((num) => (num % 2 === 0));

}
const createCounter = function() {
    let count = 0;
    return count
}


module.exports = {getEvenNumbers, createCounter};