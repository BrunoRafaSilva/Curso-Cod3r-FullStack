let contador = 1
while(contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
};

//mesmo exemplo em for

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
};

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for( let i = 0; i < notas.length; i++){
    //length é pra contar o comprimento do array
    console.log(`nota = ${notas[i]}`)
}
