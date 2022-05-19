const pessoa ={
    nome: 'bruno',
    idade: 19,
    sexo: 'masculino'
};
/*conhecido como key-value, a chave seria os itens e seu conteudo o valor*/

for(let chave in pessoa) {
    console.log(chave,pessoa[chave]);
}