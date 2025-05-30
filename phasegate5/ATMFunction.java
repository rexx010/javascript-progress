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
System.out.println(Arrays.toString(validate1));
}else if(atm[0] == 5){
System.out.println(Arrays.toString(validate2));
}else if(atm[0] == 6){
System.out.println(Arrays.toString(validate3));
}else if(num1 == 15 && atm[0] == 3){
System.out.println(Arrays.toString(validate4));
}



}


}