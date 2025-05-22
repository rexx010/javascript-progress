let number = [9, 6, 8, 11, 12];

let num1 = number[0];
let num2 = number[0];

for(let i = 1; i < number.length; i++){
if(number[i] > num1){

num2 = num1;

num1 = number[i];

}else{
 if(number[i] > num2){
num2 = number[i];
}
}

}
console.log(num2);