// operador ... rest(juntar)/spread(espalhar)
/// usar rest como parametro de função

//usar spred com objeto
const funcionario = { nome: 'Maria', salario: 2951.65 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com arrray
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)