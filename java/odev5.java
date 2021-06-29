package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        
        int r, alfa;
        
        System.out.print("r giriniz: ");
        r = input.nextInt();
        System.out.print("alfa giriniz: ");
        alfa = input.nextInt();
        
        double sonuc =  (3.14 * (r*r) * alfa) / 360;
        
        System.out.println("alan: " + sonuc);
       
        
    }

}
