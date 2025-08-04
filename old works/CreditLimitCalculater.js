


let accountNumber = 123456789;
let balanceAtStart = 20000;
let totalOfItemCharged = 208000;
let totalOfCredits = 423999;
let allowedCredit = 1000000;

let newBalance = balanceAtStart + totalOfItemCharged - totalOfItemCharged;

if(newBalance > allowedCredit){
console.log("credit limit exceeded");
}else{
console.log("limit not reached yet");
}