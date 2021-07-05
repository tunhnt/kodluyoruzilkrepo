package Calisma;

import java.util.Arrays;
import java.util.Scanner;


public class Calisma {
    

    public static void main(String[] args) {
        
       int[] list = {15,12,788,1,-1,-778,2,0};
       int once = 0, sonra= 0;
       Arrays.sort(list);
       
        System.out.println("deger giriniz: ");
       Scanner input = new Scanner(System.in);
       int deger = input.nextInt();
     


       for (int i = 0; i < list.length; i++) {
            if (deger > list[i] ) {
                once = list[i];
                sonra = list[i+1];
            }
         
        }

       
        System.out.println("Girilen sayıdan küçük en yakın sayı : " + once);
        System.out.println("Girilen sayıdan büyük en yakın sayı : " + sonra);
    }    
}
