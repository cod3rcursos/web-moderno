db.empresas.aggregate([
    {$match: {nome: "Bradesco"}},
    {$lookup: {
        from: "estados",
        localField: "estadoId",
        foreignField: "_id",
        as: "estado"
    }},
    {$unwind: "$estado"},
]).pretty()

