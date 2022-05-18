var impar = 1;
var par = 2;


{
    //blocos originarios contagem impar
    console.log("Contador de 1 até 9 em números impares");
    console.log(impar);
    {

        //bloco para o comando de laço
        do {
            impar=impar+2;
            console.log(impar);

        } while (impar < 9);
    }
}

{
    //bloco para os números pares
    console.log("Contador de 2 até 10 em números pares.");
    console.log(par);
    {
        do{
            par=par+2;
            console.log(par);
        }while(par<10);
    }
}