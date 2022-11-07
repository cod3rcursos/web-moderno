// Chamamento de funções utilizando setTimeOut (funções aninhadas - callback hell)
setTimeout(function () {
    console.log('Executando callback...')

    setTimeout(() => {
        console.log('Executando callback...')

        setTimeout(() => {
            console.log('Executando callback...')
            
        }, 2000);
    }, 2000);
}, 2000)

// Chamamentos de funções utilizando setTimeOut com promises
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo);
    })
}

esperarPor()
    .then(() => esperarPor())
    .then((esperarPor))