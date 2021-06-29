package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        
        int armut, elma, domates, muz, patlıcan;
        
        System.out.print("armut kaç kilo: ");
        armut = input.nextInt();
         System.out.print("elma kaç kilo: ");
        elma = input.nextInt();
         System.out.print("domates kaç kilo: ");
        domates = input.nextInt();
         System.out.print("muz kaç kilo: ");
        muz = input.nextInt();
         System.out.print("patlıcan kaç kilo: ");
        patlıcan = input.nextInt();
        
        double sonuc = (armut*2.14) + (elma*3.67) + (domates*1.11) + (muz*0.95) + (patlıcan*5.00); 
        
        System.out.println("Toplam tutar: " + sonuc);
       
        
        
    }

}
