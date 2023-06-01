let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);//ele foi associado so objeto
comparaComThis(global);
comparaComThis(obj);//o this agora aposta para objeto por conta do bind

let comparaComThisArrow = param => console.log(this === param);
// a função foi escrita diretamente dentro do modulo(por estar em uma linha)
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);