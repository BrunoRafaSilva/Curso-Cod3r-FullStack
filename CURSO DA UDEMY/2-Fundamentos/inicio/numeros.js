const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));// saber se o valor é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.8713
const avaliacao2 = 6.984

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));// controle de casas decimais
console.log(media.toString());// retornar ao normal
console.log(media.toString(2)); //  em binario
console.log(typeof media);
console.log(typeof Number);