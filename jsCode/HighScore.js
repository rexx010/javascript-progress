// const customerScore = function(customers) {
//     let newCustomerScore = [];
//     let highestScorer = 0;
//     for(let count = 0; count < customers.length; count++) {
//         if(customers[count].score >= 80 && customers[count].score <= 100) {
//             newCustomerScore.push(customers[count].name);
//         }
//     }
//     return newCustomerScore;
// }



// cus = [{name: "John", score: 95}, {name: "Jane", score: 2110}, {name: "Doe", score: 85}]
// console.log(customerScore(cus));



const customerScore = function(customers) {
    for(let count = 0; count < customers.length; count++) {
        if(customers[count].score <= 80 || customers[count].score >= 100) {
            customers.splice(count, 1);
            count--;
        }
    }
    return customers;
}
cus = [{name: "John", score: 95}, {name: "Jane", score: 2110}, {name: "Doe", score: 85}]
console.log(customerScore(cus));

// const isTrue = function(customers) {
//     return customers.score >= 80 && customers.score <= 100;
// }
//
//
// cus = [{name: "John", score: 95}, {name: "Jane", score: 2110}, {name: "Doe", score: 85}]
// console.log(cus.filter(name,score).);