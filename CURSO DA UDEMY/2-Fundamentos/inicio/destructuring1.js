// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro:'Top street',
        numero: 1000
    }
};

console.log(pessoa.nome)
const { nome, idade } = pessoa;
console.log(nome, idade);

const {nome: n, idade: i } = pessoa; // dar nome novo a variavel criada
console.log(n,i);

const{ sobrenome, bemHumorada = true } = pessoa;// tratavativa da criação de uma variavel nao existente no array
console.log(sobrenome, bemHumorada);

const{ endereco:{ logadouro, numero, cep}} = pessoa;
console.log(logadouro, numero, cep);

//const{ conta: { ag, num}} = pessoa;// se tentar acessar um atributo que não existe
//console.log(ag, num);//