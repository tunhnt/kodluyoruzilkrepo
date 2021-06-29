package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        
        int kenar1, kenar2, kenar3, alan;
        
        System.out.print("1.kenar uzunluğunu giriniz: ");
        kenar1 = input.nextInt();
         System.out.print("2.kenar uzunluğunu giriniz: ");
        kenar2 = input.nextInt();
         System.out.print("3.kenar uzunluğunu giriniz: ");
        kenar3 = input.nextInt();
        
        int u = (kenar1+kenar2+kenar3)/2;
        alan = u*(u-kenar1)*(u-kenar2)*(u-kenar3);
        System.out.println("Ucgenin alanı: "+ alan);
        
    }

}
