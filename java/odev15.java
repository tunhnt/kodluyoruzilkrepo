package Calisma;

import java.util.Arrays;
import java.util.Scanner;

public class Calisma {

    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
       

        System.out.println("diziniz kaç elemanlı olacak: ");
        int n = input.nextInt();
        
        int[] list = new int[n];
       
        
        for (int i = 0; i < n; i++) {
            System.out.print(i+ ". elemanı gir: ");
            list[i] = input.nextInt();
        }
        
        int temp = 0;
        
        for (int i = 1; i < list.length; i++) {
            for (int j = i+1; j < list.length; j++) {
                if (list[i] > list[j]) {
                    temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
 
            }
        }
        
        System.out.println("diziniz: " + Arrays.toString(list));
        
       

    }
}
