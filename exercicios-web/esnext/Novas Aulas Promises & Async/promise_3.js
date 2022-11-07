function gerarNuemrosAleatoriosEntre(min, max) {
    if (min > max)[max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

// gerarNuemrosAleatoriosEntre(1, 60)
//     .then(valor => `O valor aleatório gerado foi: ${valorX1}`)
//     .then(console.log)

function gerarVariosNumeros() {
    return Promise.all([
        gerarNuemrosAleatoriosEntre(1, 60, 1000),
        gerarNuemrosAleatoriosEntre(1, 60, 2000),
        gerarNuemrosAleatoriosEntre(1, 60, 3000),
        gerarNuemrosAleatoriosEntre(1, 60, 4000),
        gerarNuemrosAleatoriosEntre(1, 60, 5000)
    ])
}

console.time('Tempo de execução do promisse:')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('Tempo de execução do promisse:')
    })