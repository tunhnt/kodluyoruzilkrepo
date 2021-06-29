package Calisma;
import java.util.Scanner;


public class Calisma {

    public static void main(String[] args){
        
        Scanner not = new Scanner(System.in);
        
        System.out.print("Matematik notunuzu giriniz: ");
        int matematik = not.nextInt();
        System.out.print("Fizik notunu giriniz: ");
        int fizik = not.nextInt();
        System.out.print("Kimya notunuzu giriniz: ");
        int kimya = not.nextInt();
        System.out.print("Türkçe notunu giriniz: ");
        int turkce = not.nextInt();
        System.out.print("Tarih notunuzu giriniz: ");
        int tarih = not.nextInt();
        System.out.print("Müzik  notunu giriniz: ");
        int muzik = not.nextInt();
        
        int ortalama = (matematik+fizik+kimya+turkce+tarih+muzik)/ 6;
        System.out.println("ortalama: " + ortalama);
    }

}
