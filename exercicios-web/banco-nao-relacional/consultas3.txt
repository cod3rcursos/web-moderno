db.estados.aggregate([
    { $match: {"cidades.nome": "Sorocaba"} },
    { $unwind: "$cidades"},
    { $match: {"cidades.nome": "Sorocaba"} },
    { $project: {_id: "$cidades._id"} }
]).pretty()