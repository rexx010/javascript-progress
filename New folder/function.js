const getEvenNumbers = function(array) {
    let result = [];
    console.log(array.length);
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
    return {
        getCount:() =>{
            return count
        },
        increament: () => {
            count++;
        },
        decreament: () => {
            count--;
        },
        reset: () => {
            count = 0;
        }
    }    
 }
//  const createCounter = function() {
//     let count = 0;

//     const getCount = () => {
//         return count;
//     };

//     const increament = () => {
//         count++;
//     }
//     return {getCount, increament};
// }
    

module.exports = {getEvenNumbers, createCounter};