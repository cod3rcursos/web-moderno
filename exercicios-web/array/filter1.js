const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

// Verificando se o produto é caro
const caro = produto => produto.preco >= 500

// Veirificando se o produto é frágil
const fragil = produto => produto.fragil

// Verificando se o produto não é frágil
const naoFragil = produto => produto.fragil == false

console.log("Lista de produtos que não são frágeis:")
console.log(produtos.filter(naoFragil))

console.log("\nLista de produtos que são caros:")
console.log(produtos.filter(caro))

console.log("\nLista de produtos que são frágeis:")
console.log(produtos.filter(fragil))

console.log("\nLista de produtos que são caros e frágeis:")
console.log(produtos.filter(caro).filter(fragil))

