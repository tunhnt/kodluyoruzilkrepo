package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        
        double fiyat, kdvliFiyat, kdvOran = 0;
        
        System.out.print("Urun fiyatini giriniz: ");
        fiyat = input.nextDouble();
        
        if(fiyat > 0 && fiyat <= 1000){
            kdvOran = 0.18;
        }else if(fiyat > 1000 ) {
            kdvOran = 0.08;
        }
        
        kdvliFiyat = fiyat + (kdvOran*fiyat);
        System.out.println("Urun fiyatı: " + kdvliFiyat + " kdv oranı: " +kdvOran);
        
    }

}
