//function declaration
console.log(soma(3,3))
//o interpretador do JS primeiro lê e armazenas as funções previamente
function soma(x,y){
    return x + y
}
console.log(soma(2,3))

//function expression
//armazenar função em variavel
//guardando a função em uma variavel, a execução dela só estará disponivel se ela estiver localizada após o código.
console.log(sub(2,7))
const sub = function(x,y) {
    return x - y
}
console.log(sub(2,5))
//funções acima são anônimas

//named function expression
//aqui também tem que ser chamado apenas após a declaração
const mult = function mult(x,y){
    return x*y
}
console.log(mult(6,5))