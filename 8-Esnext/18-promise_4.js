function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator)
            resolve(aleatorio)
        }, tempo)

    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 9000),
        gerarNumerosEntre(1, 60, 8000)
    ])
}


console.time('promise')

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {

        console.timeLog('promise')
        console.timeEnd('promise')
    })
