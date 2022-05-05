let a = 3; //let nao entra no global e simVAR

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando uma variavel maluca: sem var e let!
abc = 3; //não fazer isso
console.log(global.abc);