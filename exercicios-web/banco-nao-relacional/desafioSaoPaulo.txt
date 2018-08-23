Estado
nome = São Paulo, sigla = SP, regiao = Sudeste
    Cidades
    nome = Campinas, area = 795.7, prefeito = Jonas Donizette, populacao = 1081000
    nome = Garulhos, populacao = 1325000
    nome = Sorocaba, distanciaCapital = 87, populacao = 644919

Cada Cidade tem o atributo _id <- ObjectId

db.estados.insert({
    nome: "São Paulo",
    sigla: "SP",
    regiao: "Sudeste",
    cidades: [{
        _id: ObjectId(),
        nome: "Campinas",
        area: 795.7,
        prefeito: "Jonas Donizette",
        populacao: 1081000
    }, {
        _id: ObjectId(),
        nome: "Garulhos",
        populacao: 1325000
    }, {
        _id: ObjectId(),
        nome: "Sorocaba",
        distanciaCapital: 87,
        populacao: 644919
    }]
})
