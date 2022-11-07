 // Função apra pegar somente o primeiro elemento do array
 function primeiroElemento(array) {
    return array[0]
}

// Função apra pegar somente a primeira letra de um array
 function primeiraLetra(string) {
     return string[0]
 }

 // Transfomrando as letram em minúsculas
 const letraMinuscula = letra => letra.toLowerCase()

 new Promise(function (cumprirPromessa) {
         cumprirPromessa(['Bia', 'Carlos', 'Eduardo'])
})

    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(v => console.log(v))
    //.then(console.log)