//a classe é uma função escrita de forma diferente
class Pessoa{
    constructor(nome){
        this.nome=nome;
    }

    falar(){
        console.log(`meu nome é ${this.nome}`);
    }
}
//colocar o this antes da variavel a torna publica

const p1 = new Pessoa('Jão');
p1.falar();

const pessoa = nome =>{
    return{ 
        falar: () => console.log(`Meu noime é ${nome}`)
    }
}

const p2 = pessoa('John');
p2.falar();