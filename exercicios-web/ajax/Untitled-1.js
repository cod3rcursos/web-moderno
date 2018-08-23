"use strict;"

const meuObj2 = {
    chamada2: () => {
        console.log(this) //This Retorna Module.exports ou Window. Aqui não funciona como esperado.
        console.log(module.exports === this)
        console.log(this === meuObj2)
    }
}

meuObj2.chamada2()