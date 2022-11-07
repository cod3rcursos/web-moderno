const fs = require('fs')
const path = require('path')


function exibirConteudo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

exibirConteudo(caminho)
    .then(conteudo => console.log(conteudo))

