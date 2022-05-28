function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0;
    
    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual= function(){
        return velocidadeAtual
    }

}

const uno = new Carro;
console.log(uno.getVelocidadeAtual())
uno.acelerar();
console.log(uno.getVelocidadeAtual())
console.log('----')

const clio = new Carro(400,30);
clio.acelerar();
clio.acelerar();
console.log(clio.getVelocidadeAtual())


//o this é o responsavel por tornar algo visivel fora  da função