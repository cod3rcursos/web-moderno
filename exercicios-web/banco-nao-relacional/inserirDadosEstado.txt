db.estados.insert({nome: "Acre", sigla: "AC", regiao: "Norte"})
db.estados.save({nome: "Alagoas", sigla: "AL", regiao: "Nordeste", populacao: 3322000})
db.estados.insert({
    nome: "Rio de Janeiro",
    sigla: "RJ",
    regiao: "Sudeste",
    cidades: [{
        nome: "Niterói",
        area: 133.9,
        populacao: 487562
    }]
})

db.estados.find()
db.estados.find().pretty()
db.help()