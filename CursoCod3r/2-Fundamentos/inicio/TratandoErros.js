function tratarErroElancar(erro) {
    //throw new Error('..down belong') avisando sobre o erro ao usuario
    //throw 10 true 'eitaaaa'
    throw{
        nome: erro.name,
        msg:erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try{//é um bloco de codigo que dentro ha um codigo cujo voce considerede que havera um erro
      //resumindo, o try vai ser a primeira ação da função criada
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error){tratarErroElancar(error)
        //se acontecer algum erro dentro do bloco try o erro cai aqui


    } finally{
        console.log('FINAL')
    }
}
const obj = {name:'Julio'} //só errar a const(name) dentro da function
imprimirNomeGritado(obj)




//