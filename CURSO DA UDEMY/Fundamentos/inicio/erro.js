function tratarErroElancar(erro) {
    //throw new Error('..down belong')
    //throw 10 true 'eitaaaa'
    throw{
        nome: erro.name,
        msg:erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){tratarErroElancar(e)

    } finally{
        console.log('FINAL')
    }
}
const obj = {name:'Julio'} //só errar a const dentro da function
imprimirNomeGritado(obj)




//