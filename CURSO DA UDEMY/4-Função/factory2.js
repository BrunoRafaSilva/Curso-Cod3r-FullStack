function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1, 
        valor:(preco*0.1)
    }
}

console.log(criarProduto('GOOgle',2000));
console.log(criarProduto('raul',1982))