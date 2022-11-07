// Objeto que representa uma sequencia para sempre pegar o próximo valor do id dos produtos
const sequencia = {
    _id: 1,
    get id() { return this._id++ }
}

// Objeto que vai receber a coleção de chaves e valores dos produtos (chave: ID, valores: nome e preço)
const produtos = {}

function salvarProduto(produto){
    if (!produto.id) { 
         // Se o id do produto não estiver setado, ele chama a função que cria um id 
        produto.id = sequencia.id
    }

    // Se o id tiver setado ele é substituido pela versão mais nova
    produtos[produto.id] = produto

    // Return do produto com o id
    return produto
}

// Função getProduto retornando o id do produto ou um objeto vazio
function getProduto(id) {
    return produtos[id] || {}
}

// Função para retornar todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

// Função para excluir produtos do banco de dados
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// Exprotando funções para ficarem viziveis fora do arquivo
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }