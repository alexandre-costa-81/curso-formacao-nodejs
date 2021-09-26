const express = require('express')
const config = require('config')

const app = express()
app.use(express.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.get('api.porta'), () => console.log(`Api esta executando em: http://localhost:${config.get('api.porta')}`))