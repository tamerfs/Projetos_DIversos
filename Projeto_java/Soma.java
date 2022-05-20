public class Soma
{
    public static void main(String[] args) 
    {
        int numero = 10;
        double salario = 10000.01;
        float salario2 = 10000.01f;
        /*O f no final do numero é usado para mostrar que estamos trabalhando com float
        Se você fizer float x = 10.0; o 10.0 será um literal double e não um float.
        É necessário fazer float x = 10.0F; ou float x = 10.0f; para que o valor seja "verdadeiramente" float*/
        long numeroGrande = 30000000000000l;
        /*sem o sufixo L, o valor é interpretado como int
        O que está declarando ali é um literal int que é feito um cast pelo compilador implicitamente.
        Então está reservando um espaço de 8 bytes, o tamanho de um tipo long e 
        guardando um valor inteiro que só precisaria 4 bytes, mas o resto é preenchido com zeros, então dá na mesma.
        Não há custo de execução algum, é só algo que o compilador tem que lidar quando está construindo o código.*/
        String nome = "bruno";
        char letra = 'B';        
        boolean profEhLegal = true;
    }
}

//System.out.println("Sera q ta rodando?");
