package Calisma;

import java.util.Scanner;

public class Calisma {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int sayi1, sayi2, islem;

        System.out.print("ilk sayi: ");
        sayi1 = input.nextInt();

        System.out.print("ikinci sayi: ");
        sayi2 = input.nextInt();

        System.out.println("1-toplama\n2-cikarma\n3-carpma\n4-bolme");
        System.out.println("islem secimi: ");
        islem = input.nextInt();

        switch (islem) {
            case 1:
                System.out.println("toplam: " + (sayi1 + sayi2));
                break;
            case 2:
                System.out.println("cikarma: " + (sayi1 - sayi2));
                break;
            case 3:
                System.out.println("carpma: " + (sayi1 * sayi2));
                break;
            case 4:
                if(sayi2 != 0){
                    System.out.println("bolme: " + (sayi1 / sayi2));
                }else{
                    System.out.println("bir sayi sıfıra bolunemez");
                }
                break;
            default:
                System.out.println("Tanımsız islem sectiniz");
        }

    }

}
