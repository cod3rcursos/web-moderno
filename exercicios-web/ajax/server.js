// bodyParser => faz parser do body da requisição interpretando dados e deixando eles prontos para serem manipulados
const bodyParser = require('body-parser')
const express = require('express')
// Instanciando o express
const app = express()

// Midllewares (função que vai ser executada quando determinada requisição chegar) que vão ser aplicados semrpe que acontecer uma requisição

// Midlleware para permitir uso dos arquivos estaticos que estão dentro dessa pasta (HTML, CSS, JS...)
app.use(express.static('.'))
// Utilizando bodyParser para tratar dados vindos de formulários por qualquer requisição
app.use(bodyParser.urlencoded({ extended: true }))
// Utilizando bodyParser para tratar dados vindos de JSON's por qualquer requisição (lê os dados e transforma em objeto)
app.use(bodyParser.json())

// Dependencia usada para interpretar o formulário que traz o arquivo (img)
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})


app.get('/parOuImpar', (req, res) => {
    // MEIOS DE RECEBER DADOS DO FRONT-END PELO EXPRESS
    // req.body
    // req.query  http://localhost:8080/parOuImpar?numero=33
    // req.params http://localhost:8080/parOuImpar/33

    // Verificando se o número passado é par
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        // Resultando par para par e impar para impar
        resultado: par ? 'par' : 'impar'
    })
})

// Verficando se o servidor está rodando na porta 8080 e retornando no console
app.listen(8080, () => console.log('Executando...'))