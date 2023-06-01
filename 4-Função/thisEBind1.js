const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)// se retirar o this, vai dar erro
    }
}

pessoa.falar()
const falar = pessoa.falar //armazenando a função dentro da variavel
falar()//conflito de paradigma

const falarDePessoa = pessoa.falar.bind(pessoa)// com o uso do bind, dá certo.
falarDePessoa()