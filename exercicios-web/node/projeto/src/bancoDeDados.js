fs = require('fs')
const arquivo = __dirname + '/db.json'
const privatedb = {
    _arquivo: arquivo,
    _produtos: [],
    _lido: false,

    get id() {
        return this._produtos
            .filter(x => x !== null)
            .map(x => x.id)
            .reduce((acc, id) => id > acc ? id : acc, 0) + 1
    },
    get produtos() {
        this._leProdutosDoArquivo()
        return this._produtos
    },

    set produtos(produtos) {
        this._produtos = produtos.filter(x => x !== null)
        this._persisteProdutos(this.produtos)
    },

    _persisteProdutos: function (produtos) {
        fs.writeFile(this._arquivo, JSON.stringify(produtos), function (err) {
            if (err) console.log(err);
        })
    },
    _leProdutosDoArquivo: function () {
        if (!this._lido) {
            const json = fs.readFileSync(this._arquivo, {encoding: 'utf-8', flag: 'a+'}) || '[]';
            this._produtos = JSON.parse(json);
            this._lido = true;
        }
    }
}

const db = {
    salvarProduto: function (produto) {
        const produtos = privatedb.produtos
        let indice = -1

        if (!produto.id) produto.id = privatedb.id
        else indice = produtos.findIndex(x => x.id == produto.id)

        if (indice === -1)
            produtos.push(produto)
        else
            produtos[indice] = produto
        privatedb.produtos = produtos
        return produto
    },
    getProduto: function (id) {
        return privatedb.produtos.find(x => x.id == id) || {}
    },
    excluirProduto: function (id) {
        const produtos = privatedb.produtos
        const indice = produtos.findIndex(x => x.id == id)
        const produto = produtos[indice]
        delete produtos[indice]
        privatedb.produtos = produtos
        return produto
    },
    getProdutos: function () {
        return privatedb.produtos
    }
}


module.exports = {db}