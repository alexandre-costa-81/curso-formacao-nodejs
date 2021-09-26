const express = require('express')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')

const app = express()
app.use(express.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, req, res, proximo) => {
    let status = 500

    if (erro instanceof NaoEncontrado) {
        status = 404
    }

    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
        status = 400
    }

    res.status(status)
    res.send(JSON.stringify({
        mensagem: erro.message,
        id: erro.idErro
    }))
})

app.listen(config.get('api.porta'), () => console.log(`Api esta executando em: http://localhost:${config.get('api.porta')}`))