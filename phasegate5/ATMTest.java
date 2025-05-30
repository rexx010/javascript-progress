import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ATMTest{

	@Test
	public void functionExits(){
	int num1 = 16;
	int[] atm = {1,2,3};
	ATMFunction.validate(num1, atm);
	
}

	@Test
	public void digitsNotMoreThan16(){
	int num1 = 16;
	int[] atm = {4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4};
	int output = ATMFunction.validate(num1, atm);
	String expected = "Valid: true, issuer: Visa";
	assertEquals(output, expected);
	
}



}