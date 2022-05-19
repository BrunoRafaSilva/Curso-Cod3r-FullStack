function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    //ele vai pegar o valor aleatorio multiplicar ele pelo maximo e minimo informado
    //e en seguida irá adicionar o valor minimo, sendo assim, nunca será 0
    return Math.floor(valor)//arredonda para baixo
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
//laço de repetição praticamente infinito
console.log('Até a próxima!')



/* também poderia ter sido feito assim:
let opcao = 0;
do {
    opcao = getinteiroaleatorioentre(-1, 10);
    console.log(opcao);
}while(opcao != -1)*/