function area(largura, altura) {
    const area = largura * altura;
    if (Number.isNaN(area) || area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }/*if(Number.isNaN(area)) {
        console.log('Valor não é um número!')
       
    }*/ else {
        return area;
    }
}
// codigo está em alguns comentarios, mas foi apenas um teste
console.log(area(20,2));
console.log(area(2));
console.log(area());
console.log(area(2,3,4,5));
console.log(area(5,5));



