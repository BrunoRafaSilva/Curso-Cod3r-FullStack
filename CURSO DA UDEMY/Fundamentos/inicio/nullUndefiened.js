let valor ;// nao inicializada
console.log(valor);

valor = null ; // ausência de valor
console.log(valor);
/* console.log(valor.toString()); Erro! */

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.Preço = 3.50;
console.log(produto);

produto.Preço = undefined; // evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);

delete produto.Preço;
console.log(produto);

produto.preço = null;
console.log(!!produto.preço);
console.log(produto);