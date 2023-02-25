const escola = 'Cod3r';

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)) //retorna o codigo html;
console.log(escola.indexOf(3));
console.log(escola.indexOf('o'));

console.log(escola.substring(1));//começa apartir do
console.log(escola.substring(0,3));//começa e termina antes

console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace('3' , 'e'));//substituição

console.log('Ana,Maria,Pedro'.split(','));//transofrmar string em array
