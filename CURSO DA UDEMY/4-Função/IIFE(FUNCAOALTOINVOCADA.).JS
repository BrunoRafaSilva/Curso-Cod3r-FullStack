//foge do escopo global
//IIFE => immediately invoked function expression
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    //tudo dentro dela não foge dela
})
()