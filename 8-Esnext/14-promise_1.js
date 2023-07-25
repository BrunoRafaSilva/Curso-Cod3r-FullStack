let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    /*cumprirPromessa({
        x:3,
        y:4
    })*/
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
//para devolver dois valores é necessario criar um objeto
})

console.log(p)

p.then(valor => 
    console.log(valor),
    //console.log(valor.x)
)
function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase(0)

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)


/*
p
    //.then(valor => console.log(valor[0]))
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
    */
