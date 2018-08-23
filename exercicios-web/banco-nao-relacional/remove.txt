db.estados.count()

db.estados.remove({sigla: "AC"})
db.estados.count()
db.estados.find()

db.estados.remove({populacao: {$exists: true}}, 1)
db.estados.count()
db.estados.find()

db.estados.update({sigla: "RJ"}, {$set: {populacao: 16720000}})

db.estados.remove({populacao: {$lt: 20000000}})
db.estados.find()