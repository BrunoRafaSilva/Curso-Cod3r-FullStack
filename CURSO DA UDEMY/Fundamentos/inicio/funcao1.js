//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
};

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2,10,1,5,8,6);
imprimirSoma();


//funcao com retorno
function soma(a,b = 0){  //foi definido um valor padrão para b
    return a + b
};

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());