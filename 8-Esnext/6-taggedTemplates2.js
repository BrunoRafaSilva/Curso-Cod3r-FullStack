function real(partes, ...valores) {
    const resultado = []
    valores.forRach((valor, indice) => {
        valor = isNaN(valor ? valor : `R$${valor.toFixed(2)}`)
    })
}