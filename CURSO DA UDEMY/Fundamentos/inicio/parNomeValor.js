// par nome/valor
const saudacao = 'opa'; // contexto léxico 1

function exec()  {
    const saudacao = 'ixi maria' // contexto léxico 2
    return saudacao
}


//objetos são grupos aninhados
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logadouro: 'Cond Rec Orquidea',
        numero: 378,
        zipcode: 57084156

    }
}

console.group(saudacao);
console.log(exec());
console.log(cliente);

console.log(cliente.endereço.numero);