const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// SEM CALLBACK
const notasBaixas1 =[];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    //o comando push fara com que todas as notas baixas vão para dentro do arreia
    }
};

console.log(notasBaixas1);

// com callback
const notasBaixas2 = notas.filter(function (nota)  {
    return nota < 7
});//se for verdadeiro o elemento entra no array

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);
