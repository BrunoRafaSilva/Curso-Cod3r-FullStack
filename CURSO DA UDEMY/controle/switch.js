const imprimirRsultado = function(nota){
    switch (Math.floor(nota)){
        case 10: //posso deixar um case vazio
        case 9: // se for 10 ou 9 vai ser essa mensagem  
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')

    }
    console.log('Fim!')
}

imprimirRsultado(10)
imprimirRsultado(7)
imprimirRsultado(6)
imprimirRsultado(2)
imprimirRsultado(-1)