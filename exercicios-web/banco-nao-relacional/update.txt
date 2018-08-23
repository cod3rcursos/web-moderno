db.estados.update({sigla: "SP"},{$set: {populacao: 45340000}})

db.estados.update({sigla: "AL"},{$set: {cidades: [{nome: "Sergipe"}]}})

db.estados.update(
    {sigla: "SP"},
    {$push: {cidades: {nome: "Santos", populacao: 433966}}}
)

db.estados.find({populacao: {$exists: true}}, {_id: 0, nome: 1})