package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        
        double boy, kilo;
        
        System.out.print("boy giriniz: ");
        boy = input.nextDouble();
        System.out.print("kilo giriniz: ");
        kilo = input.nextDouble();
        
        double sonuc = kilo / boy * boy;
        
        System.out.println("Vucut kitle endeksiniz: " + sonuc);
        
        
       
        
    }

}
