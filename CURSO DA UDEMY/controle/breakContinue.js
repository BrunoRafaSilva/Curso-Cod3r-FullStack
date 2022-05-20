const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {// o 5 é o indice
    break// ele irá parar ao encontrar o indice 5
    }// o break está associado ao for e não se  assossia ao if
    console.log(`${x} = ${nums[x]}`) //só os x mostra só o indice
}//break causa o desvio de fluxo

for  (y in nums) {
    if (y == 5){
        continue
    }//o continue interrompe a repetição atual e parte para  a próxima
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { //rotulou
    for (b in nums) {
        if(a == 2 && b ==3) break externo //como o break citou o rotulo, ele irá agir em cima do rotulo e não apenas do "for" acima
        console.log(`Par = ${a},${b}`)
    }
}
console.log('Fim');