const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o último
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // remove o massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array apartir de x indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // o ultimo indice não entra '4'
console.log(algunsPilotos2)