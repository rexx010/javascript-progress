import java.util.Arrays;
public class ATMFunction{

public static void validate(int num1, int[] atm){

String[] validate = new String [1];
validate[0] = "Valid: false, issuer: Invalid length";

String[] validate1 = new String [1];
validate1[0] = "Valid: true, issuer: Visa";
String[] validate2 = new String [1];
validate2[0] = "Valid: true, issuer: Mastercard";
String[] validate3 = new String [1];
validate3[0] = "Valid: true, issuer: Discover";
String[] validate4 = new String [1];
validate4[0] = "Valid: true, issuer: American Express";




if(atm[0] < 3 || atm[0] > 6){
System.out.println(Arrays.toString(validate));

}else if(atm[0] == 4){
	System.out.println("Visa card");

	int secondDigits = 0;
	int oddPlace = 0;
	int checker = 0;
	for(int count = 0; count < atm.length; count+2){
		checker += atm[count] * 2;
		int mod = 0;
		int div = 0;
		if(checker > 9){
			mod = checker % 10;
			div = checker / 10;
			secondDigits += mod + div;
		}else{
			secondDigits += checker;
		}
	}
	
	for(int counter = 1; counter < atm.length; counter+2){
		oddPlace += atm[counter];
	}
	int total = secondDigits + oddPlace;
	
	if(total % 10 == 0){
		for(int number = 0; number < atm.length; number++){
		System.out.print("Credit Card Number: "+atm[number]);
		}
	System.out.print("Credit Card Digits: "+num1);
	System.out.print("Credit Card Validity Status: Valid");

	}else{
	for(int number = 0; number < atm.length; number++){
		System.out.print("Credit Card Number: "+atm[number]);
		}
	System.out.print("Credit Card Digits: "+num1);
	System.out.print("Credit Card Validity Status: Invalid");

	}

}else if(atm[0] == 5){
System.out.println("Master card");

}else if(atm[0] == 6){
System.out.println("Discover card");

}else if(atm[0] == 3 && atm[1] == 7){
System.out.println("American Express card");
}



}


}