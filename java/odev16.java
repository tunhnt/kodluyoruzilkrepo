package Calisma;


public class Calisma {

    public static void main(String[] args) {
        
        //Dizideki Elemanların Frekansını Bulma
        
        int[] list = {10, 20, 20, 10, 10, 20, 5, 20};
        int sayac = 1;
       
        for (int i = 0; i < list.length; i++) {
            for (int j = i+1; j < list.length; j++) {
                if(list[i] == list[j]){
                    sayac++;
                    list[j] = -1; 
                }
            }
            if (list[i] != -1) {
                System.out.println(list[i] + "den " + sayac + " tane");
            }
            
            sayac = 1;
        }
       

    }
}
