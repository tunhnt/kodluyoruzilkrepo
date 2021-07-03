package Calisma;

import java.util.Scanner;

public class Calisma {

    public static void main(String[] args) {

        Scanner not = new Scanner(System.in);

        
        System.out.print("Matematik notunuzu giriniz: ");
        int matematik = not.nextInt();
        if (matematik < 0 || matematik > 100) {
            System.out.println("gecerli deger girmediniz lutfen gecerli  bir deger giriniz: ");
            matematik = not.nextInt();
        }
        System.out.print("Fizik notunu giriniz: ");
        int fizik = not.nextInt();
        if (fizik < 0 || fizik > 100) {
            System.out.println("gecerli deger girmediniz lutfen gecerli  bir deger giriniz: ");
            fizik = not.nextInt();
        }
        System.out.print("Türkçe notunu giriniz: ");
        int turkce = not.nextInt();
        if (turkce < 0 || turkce > 100) {
            System.out.println("gecerli deger girmediniz lutfen gecerli  bir deger giriniz: ");
            turkce = not.nextInt();
        }
         System.out.print("Kimya notunuzu giriniz: ");
        int kimya = not.nextInt();
        if (kimya < 0 || kimya > 100) {
            System.out.println("gecerli deger girmediniz lutfen gecerli  bir deger giriniz: ");
            kimya = not.nextInt();
        }
        System.out.print("Müzik  notunu giriniz: ");
        int muzik = not.nextInt();
        if (muzik < 0 || muzik > 100) {
            System.out.println("gecerli deger girmediniz lutfen gecerli  bir deger giriniz: ");
            muzik = not.nextInt();
        }

        int ortalama = (matematik+fizik+kimya+turkce+muzik)/ 6;
        System.out.println("ortalamanız: " + ortalama);
        
        if (ortalama < 55) {
            System.out.println("kaldınız");
        }else {
            System.out.println("geçtiniz");
        }
         
        
    }

}
