import java.util.Scanner;

public class Random{
public static void main(String[] args){

int counter = 0;
int correctAnswer = 0;
int wrongAnswer= 0;


for(int counter = 0; counter <= 10; counter++){

int firstNumber = Math.floor(Math.random() * 100);
int secondNumber = Math.floor(Math.random() * 100);
int result = 0;



if(secondNumber > firstNumber){
int firstcopy = firstNumber;
firstNumber = secondNumber;
secondNumber = firstcopy;

result = firstNumber - secondNumber;
}else{
result = firstNumber - secondNumber;
}

int attempted = 0;
while(attempted < 2){

System.out.print("The first number is ", firstNumber, "and the second number is", secondNumber);

int userChoice = Number(prompt("what is the answer?: "));

if(result == userChoice){
System.out.print("correct");
correctAnswer++;
attempted = 2;
}
if(result != userChoice){
System.out.print("invalid answer");
attempted = attempted + 1;
}


}


}
System.out.print("correct answer is", correctAnswer,'/ 10');


}
}