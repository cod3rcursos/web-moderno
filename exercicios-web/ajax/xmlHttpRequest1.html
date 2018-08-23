<!DOCTYPE html>
<html>

<head>
    <meta charset='UTF-8'>
    <title>XMLHttpRequest #01</title>
    <link rel='stylesheet' href='css/estilo.css'>
</head>

<body class="conteudo exercicio">
    <h1>Estados</h1>

    <script>
        function ajax(config) {
            const xhr = new XMLHttpRequest()
            xhr.open(config.metodo, config.url, true)

            xhr.onload = e => {
                if (xhr.status === 200) {
                    config.sucesso(xhr.response)
                } else if (xhr.status >= 400) {
                    config.erro({
                        codigo: xhr.status,
                        texto: xhr.statusText
                    })
                }
            }

            xhr.send()
        }

        function criarTabela(estados) {
            const linhas = estados.map(estado => {
                const tdId = document.createElement('td')
                tdId.innerHTML = estado.id

                const tdNome = document.createElement('td')
                tdNome.innerHTML = estado.nome

                const tdSigla = document.createElement('td')
                tdSigla.innerHTML = estado.sigla

                const tr = document.createElement('tr')

                tr.appendChild(tdId)
                tr.appendChild(tdNome)
                tr.appendChild(tdSigla)

                return tr
            })

            const tabela = document.createElement('table')
            linhas.forEach(linha => tabela.appendChild(linha))
            document.body.appendChild(tabela)
        }

        ajax({
            url: "dados/estados.json",
            metodo: "get",
            sucesso(resposta) {
                const estados = JSON.parse(resposta)
                criarTabela(estados)
            },
            erro(e) {
                const msg = document.createTextNode(`${e.codigo}: ${e.texto}`)
                document.body.appendChild(msg)
            }
        })
    </script>
</body>