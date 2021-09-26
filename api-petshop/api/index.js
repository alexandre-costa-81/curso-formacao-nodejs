const express = require('express')
const config = require('config')
const roteador = require('./rotas/fornecedores')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const { formatosAceitos, SerializadorErro } = require('./Serializador')

const app = express()

app.use(express.json())

app.use((req, res, proximo) => {
    let formatoRequisitado = req.header('Accept')

    if (formatoRequisitado === '*/*') {
        formatoRequisitado = 'application/json'
    }

    if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
        res.status(406)
        res.end()
    } else {
        res.setHeader('Content-Type', formatoRequisitado)
        proximo()
    }
})

app.use('/api/fornecedores', roteador)

app.use((erro, req, res, proximo) => {
    let status = 500

    if (erro instanceof NaoEncontrado) {
        status = 404
    }

    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
        status = 400
    }

    if (erro instanceof ValorNaoSuportado) {
        status = 406
    }

    const serializador = new SerializadorErro(res.getHeader('Content-Type'))
    res.status(status)
    res.send(serializador.serializar({
        mensagem: erro.message,
        id: erro.idErro
    }))
})

app.listen(config.get('api.porta'), () => console.log(`Api esta executando em: http://localhost:${config.get('api.porta')}`))