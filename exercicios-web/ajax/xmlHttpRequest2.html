<!DOCTYPE html>
<html>

<head>
    <meta charset='UTF-8'>
    <title>XMLHttpRequest #02</title>
    <link rel='stylesheet' href='css/estilo.css'>
    <style>
        input[type=file] {
            display: flex;
            margin: 10px;
            padding: 40px;
            font-size: 40px;
            background: crimson;
            border-radius: 20px;
        }
    </style>
</head>

<body class="conteudo exercicio">
    <input type="file" name="arquivo" />
    <div class="progresso"></div>

    <script>
        function ajaxUpload(config) {
            const xhr = new XMLHttpRequest()

            if (xhr.upload) {
                xhr.upload.onprogress = e => {
                    const atual = e.loaded
                    const total = e.total
                    const percentual = Math.floor(atual / total * 100)
                    config.progresso({ atual, total, percentual })
                }
            }

            xhr.open("post", config.url, true)
            xhr.send(config.formData)
        }

        document.querySelector('input[type=file]').onchange = e => {
            const formData = new FormData()
            const inputFile = e.target
            formData.append(inputFile.name, inputFile.files[0])

            ajaxUpload({
                url: "upload",
                formData: formData,
                progresso(dados) {
                   const progresso = document.querySelector('.progresso')
                   progresso.innerHTML = JSON.stringify(dados) 
                }
            })
        }
    </script>
</body>