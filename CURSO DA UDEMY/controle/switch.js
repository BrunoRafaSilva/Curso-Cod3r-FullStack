const imprimirRsultado = function(nota){
    switch (Math.floor(nota)){
        case 10: //posso deixar um case vazio, assim ele entender que ele vai executar a tarefa de baixo
        case 9: // se for 10 ou 9 vai ser essa mensagem  
            console.log('Quadro de Honra')
            break // a palavra reservada break é necessaria
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break// o break é uma palavra para saida
        default:
            console.log('Nota Invalida')
        // aqui é se nao for nenhum acima
    }
 
    console.log('Fim!')
}


imprimirRsultado(10)
imprimirRsultado(7)
imprimirRsultado(6)
imprimirRsultado(2)
imprimirRsultado(-1)