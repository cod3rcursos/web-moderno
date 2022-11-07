const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

 const chineses = fC => fC.pais === 'China'
 const mulheres = fC => fC.genero === 'F'
 const menorSalario = (funcC, funcAtualC) => {
    return funcC.salario < funcAtualC.salario ? funcC : funcAtualC
}

const paisOrigem = fX => fX.pais === 'Brazil'
const homens = fB => fB.genero === 'M'
const maiorSalario = (funcB, funcAtualB) => {
    return funcB.salario > funcAtualB.salario ? funcB : funcAtualB
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    
    // mulher chinesa com menor salário?
    const funcChines = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    // homem brasileiro com o maior salario?
    const funcX = funcionarios.filter(paisOrigem).filter(homens).reduce(maiorSalario)

    console.log(funcChines)

    console.log(funcX)
})