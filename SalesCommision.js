const input = require("prompt-sync");
const prompt = input();

console.log('item\t\tvalue');

let item = [239.99, 129.75, 99.95, 350.89]
 
for(let number in item){
console.log(`${number}\t\t${item[number]}`)
}

const percent = 0.09;
let weeklyPay = Number(prompt('Enter your weekly payment: '));

let userchoice = Number(prompt('Enter the number of the item on the table sold: '));
let price = 0;

if(userchoice == 0){
price = item[0];
}
else if(userchoice == 1){
price = item[1];
}
else if(userchoice == 2){
price = item[2];
}
else if(userchoice == 3){
price = item[3];
}

price = price * percent + weeklyPay;
console.log(price)