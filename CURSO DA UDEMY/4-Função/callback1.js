const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
//isso vai ser tipo uma repetição
fabricantes.forEach(imprimir)
//foreach é uma função de fabricantes
fabricantes.forEach(function(a) {
    console.log(a)
})

fabricantes.forEach(fabricante => console.log(fabricante))

function imprimir(nome, index) {
    console.log(`${index + 1}. ${nome}`)
} 
fabricantes.forEach(imprimir);
