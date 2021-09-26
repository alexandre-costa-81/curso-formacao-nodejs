const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

const app = express()

app.use(bodyParser.json())

app.listen(config.get('api.porta'), () => console.log(`Api esta executando em: http://localhost:${config.get('api.porta')}`))