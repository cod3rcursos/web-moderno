const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')
 
axios.get(url).then(resposta => {
    const funcionarios = resposta.data 
    const fun2 = funcionarios.filter(colaborador => colaborador.pais === "China" && colaborador.genero === "F")
    let lista = []
    for (const c of fun2){
        lista.push(c.salario)
    }
    const fun3 = fun2.filter(f => f.salario === lista.sort((a, b) => a - b)[0])
    
    console.log(fun3)
})
