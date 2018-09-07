function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Seja bem vindo ${nome}.`)
        
        next()
    }
}

module.exports = saudacao