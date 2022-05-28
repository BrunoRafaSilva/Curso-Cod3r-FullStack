// contexto do qual as coisas foram declaradas dentro da linguagem
//a função carrega com si o contexto do qual ela foi escrita

const valor = 'Global';
function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'sex';
    minhaFuncao();
}

exec()