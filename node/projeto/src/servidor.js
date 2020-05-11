const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const servidor = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, resp, next) => {
    console.log('Passou pelo Middleware')
    next()
})

app.get('/produtos', (req, resp, next) => {
    resp.send(servidor.getProdutos())
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(servidor.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    resp.send(servidor.salvarProduto(produto))
})
/* app.get('/produtos', (req, resp, next) => {
    resp.send({ nome: 'Notebook', preco: 123.45 }) //já converte para JSON
}) */


app.put('/produtos/:id', (req, resp, next) => {

    const produto = {
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }

    resp.send(servidor.salvarProduto(produto))
})

app.delete('/produtos/:id', (req, resp, next) => {
    resp.send(servidor.deletar(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
}) 