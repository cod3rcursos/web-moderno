const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const bancoDeDados = require('./bancoDeDados')

// Aplicando middleware (com o método use para todas as requisições) que vai fazer um parser nos dados enviados pelo postman a depender do tipo de formulário escolhido (urlencoded), permitindo assim a visualização do objeto
app.use(bodyParser.urlencoded({
    extended: true
}))

// Função /produtos sem ID traz todos os produtos cadastrados
app.get('/produtos', (req, res, next) => {
    // O método send converte o objeto para JSON automaticamente
    res.send(bancoDeDados.getProdutos())
})

// Função /produtos com ID, traz somente os produtos com o ID digitado
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Função post que vai submeter e salvar os dados
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    // Retornandno produto como resposta
    res.send(produto) // Convertendo em JSON
})

// Função para sobreescrever produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
    })
    res.send(produto) // Convertendo em JSON
})

// Função para sobreescrever produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // Convertendo em JSON
})

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}.`)
})