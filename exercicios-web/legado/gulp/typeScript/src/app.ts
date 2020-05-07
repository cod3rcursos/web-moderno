import { Carro, Vendavel } from './produto'

function exibir(v: Vendavel) {
    console.log(`${v.nome} custa ${v.preco}!`)
}

const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
exibir(c)

function soma(a: number, b: number) {
    return a + b
}

console.log(soma(2, 3))