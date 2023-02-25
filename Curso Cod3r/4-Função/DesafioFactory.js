/*const Pessoa = nome => {
    return{
        falar: () => console.log(`Olá, meu nome é ${nome}.`)
    }
}

const p1 = Pessoa('Bruno');
p1.falar();
*/

function Retorno(ludo,jero) {
    this.ludo=ludo;
    this.jero=jero;
    this.falar=function(){
        console.log(`Olá, meu nome é ${this.ludo+', '+this.jero}`)
    }
   
}

const p2 = new Retorno('Bruno','Silva')
p2.falar()
console.log(p2.ludo)

//se não tivesse this antes do ludo e jero, não seria possivel os invocar