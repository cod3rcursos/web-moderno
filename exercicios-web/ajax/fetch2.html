<!DOCTYPE html>
<html>

<head>
    <meta charset='UTF-8'>
    <title>Fetch API #02</title>
    <link rel='stylesheet' href='css/estilo.css'>
    <style>
        form {
            display: flex;
            flex-direction: column;
        }

        form input,
        form select,
        form button {
            margin: 10px;
            font-size: 1.6em;
        }
    </style>
</head>

<body class="conteudo exercicio">
    <h1>Formulário Via Fetch</h1>
    <form name="usuarioForm" action="formulario" method="post">
        <input type="text" name="nome" placeholder="Nome..." />
        <input type="text" name="sobrenome" placeholder="Sobrenome..." />
        <button>Salvar</button>
    </form>
    <div id="resultado"></div>
    <script>
        document.usuarioForm.onsubmit = async e => {
            e.preventDefault()

            const form = e.target
            const data = new FormData(form)
            data.append('ajax', true)

            const options = {
                method: form.method,
                body: new URLSearchParams(data)
            }

            const resultado = document.getElementById('resultado')
            // fetch(form.action, options)
            //     .then(resp => resp.json())
            //     .then(json => {
            //         resultado.innerHTML = JSON.stringify(json)
            //     })
            //     .catch(e => {
            //         resultado.innerHTML = e
            //     })
            
            try {
                const resp = await fetch(form.action, options)
                const json = await resp.json()
                resultado.innerHTML = JSON.stringify(json)
            } catch (e) {
                resultado.innerHTML = e
            }
        }
    </script>
</body>