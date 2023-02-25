//melhor e pior pontuação
let pontuacao = [10, 20, 20, 8, 25, 3, 0, 30, 1];
let record = 0;
let piorresult = 0;
let menorpont = 100000;
let maiorpont = 10;
let contador = pontuacao.length

for (let i = 0; i < pontuacao.length; i++) {

    if (pontuacao[i] > maiorpont) {
        maiorpont=pontuacao[i];
        ++record;
    }else if(pontuacao[i]<menorpont) {
        menorpont = pontuacao[i];
        piorresult= i + 1;
    }

       
}
console.log(record);
console.log(piorresult);