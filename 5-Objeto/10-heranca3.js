const pai = { nome:'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // essa função define qual prototipo será utilizado como parametro
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} // se estivesse falso, não iria aparecer no Object.keys
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    console.log(key)
    filha2.hasOwnProperty(key)?
        console.log(key) : console.log(`Por herança: ${key}`) // a primeira opção será se tem o valor dentro e a segundo é se ela recebeu por conta da herança, o "nome" é pertencente, porémm "corCabelo" não.
}