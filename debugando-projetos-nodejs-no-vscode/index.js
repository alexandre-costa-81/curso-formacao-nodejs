const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const valor = req.query.dadoExterno
    const valorDeResponse = `Você me mandou tal ${valor}`
    res.send(valorDeResponse)
})

const port = 3000
app.listen(port, () => {
    console.log(`
        Servidor subiu com sucesso
        http://localhost:${port}
    `)
})