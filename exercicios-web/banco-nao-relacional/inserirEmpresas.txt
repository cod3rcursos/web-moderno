    db.empresas.insert({nome: "Bradesco", estadoId: ObjectId("5d8570683a77f90093cbd113")})
    db.empresas.insert({nome: "Vale", cidadeId: ObjectId("5d8570683a77f90093cbd112")})
    db.empresas.find().pretty()
     
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
     
    db.estados.find().pretty()