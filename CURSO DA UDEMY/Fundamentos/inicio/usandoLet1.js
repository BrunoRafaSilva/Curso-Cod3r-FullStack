var numero = 1; //mesmo sendo let ele nao puxa o de dentro
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero);