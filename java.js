public class Program
{
    public static void main(String[] args) {
    
    /* Type, how old you are and you will know
       whether you are an adult or an underage.
       (by russian law) */
    
    String y = "You are an adult";
    String z = "You are an underage";
    
     Scanner age = new Scanner(System.in);
     int x = age.nextInt();
     
       if (x >= 18) {
       System.out.print (y);
       }
  else {
       System.out.print (z)
  }
}}