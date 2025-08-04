public class SecondHighest{

public static int second(int[] number){

int highest = number[0];
int secondHighest = number[0];

for(int i = 1; i < number.length; i++){

if(number[i] > highest){

secondHighest = highest;

highest = number[i];
}else{
if(number[i] > secondHighest){
secondHighest = number[i];
}
}

}
return secondHighest;

}







}