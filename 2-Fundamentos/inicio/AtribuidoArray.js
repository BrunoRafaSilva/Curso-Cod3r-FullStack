const testando = {
    pega:{
            opcao1: 'Brasileiro',
            opcao2: 'INTERNACIONAL'}
    };
console.log(testando.pega.opcao1);//mostra o item dentro do array

const {pega:{opcao1,opcao2}} = testando;
console.log(opcao1, opcao2);