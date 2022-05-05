let num1 =  1;
let num2= 2;

num1++ //acrescenta uma unidade
console.log(num1);
--num1 //diminui uma unidade
console.log(num1);
//colocar o simbolo antes faz com que ele seja executado com prioridade
console.log(++num1 === num2--);
console.log(num1 === num2);