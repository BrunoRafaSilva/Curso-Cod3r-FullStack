function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
        //arguments é um array interno de uma função que armazena todos os argumentos passados à função
    }//toda função tem esse argument disponivel
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.3));
console.log(soma(1.2,3.6, " teste"));
console.log(soma('a', 'b', 'c'));
