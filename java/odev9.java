package Calisma;

import java.util.Scanner;

public class Calisma {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String username, password, control, newPassword;

        System.out.print("kullanıcı adiniz: ");
        username = input.nextLine();

        System.out.print("sifreniz: ");
        password = input.nextLine();

        if (username.equals("patika") && password.equals("java123")) {
            System.out.println("Giriş yaptınız");
        } else {
            System.out.println("Bilgileriniz yanlış...");
            System.out.println("Sifrenizi sıfırlamak istiyorsanız 1 yazınız");

            control = input.nextLine();

            if (control.equals("1")) {
                System.out.println("Lütfen yeni şifrenizi giriniz: ");
                newPassword = input.nextLine();
                if(newPassword.equals(password) || newPassword.equals("java123")) {
                    System.out.println("HATALI ŞİFRE GİRDİNİZ VEYA ESKİ ŞİFRENİZİ GİRDİNİZ, TEKRAR DENEYİNİZ");
                }else {
                    System.out.println("şifre başarıyla değiştirildi");
                }
            }
        }
    }

}
