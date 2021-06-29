package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        
        int km;
        
        System.out.print("1.kenar uzunluğunu giriniz: ");
        km = input.nextInt();
         
        double sonuc = 10+km*2.20;
        
        if(sonuc < 20) {
            sonuc = 20;
        }
        
        System.out.println("Odemeniz gereken ucret: " + sonuc);
    }

}
