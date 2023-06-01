function teste1(num) {
    if(num >= 7)
        console.log(num)
        console.log('Final')
    
    //esse caso o codigo nao roda certo
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7);{//cuidado com";", nao usar em estrututas de controle"
    console.log(num)
    }
}

teste2(6);
teste2(8);