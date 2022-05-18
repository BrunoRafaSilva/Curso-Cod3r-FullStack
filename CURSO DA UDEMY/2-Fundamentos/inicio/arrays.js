const valores = [7.7, 9.6, 10.8, 6.98];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 15.6;
console.log(valores);
//console.log(valores[4]);
console.log(valores.length)

valores.push({id:3}, false, null, 'teste'); // por ser tipagem fraca, aceita numeros e string no mesmo array
console.log(valores);

console.log(valores.pop());// ele mostra o ultimo elemento do array, porém o retira do array
console.log(valores);
// delete valores[1] esse remove algum especifico

console.log(typeof valores);
