const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados.js')

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/


app.get('/produtos', (req, res, next) => {
    //res.send({ nome: 'Notebook', preco: 123.45}) //converte para JSON
    res.send(bancoDeDados.getProdutos)
})//se colocar .use, ele vai responder qualquer metodo(tem que demover o /produtos)

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})