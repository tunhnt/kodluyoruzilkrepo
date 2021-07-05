package Calisma;

import java.util.Arrays;



public class Calisma {
    

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3, 4, 5};
   
        double harmonikSeri = 0;
        
        for (int i = 0; i < numbers.length; i++) {
    
            harmonikSeri += 1.0/numbers[i];
        }
        
        double harmonikOrtalama = harmonikSeri / numbers.length;
       

     
        System.out.println(harmonikSeri);
        System.out.println(harmonikOrtalama);
    }    
}
