import java.util.Scanner;


public class ATM{
public static void main(String[] args){

Scanner input = new Scanner(System.in);

System.out.print("Enter your digits: ");
int num1 = input.nextInt();
if(num1 < 15 || num1 > 16){
System.out.print("Invalid length of number or invalid input");
}else{

int[] atm = new int [num1];

System.out.print("Enter your digits: ");
for(int counter = 0; counter < num1; counter++){
atm[counter] = input.nextInt();
}


ATMFunction.validate(num1, atm);
}

}

}

