module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Vocês está na rota de atendimentos e está fazendo um GET'))

    app.post('/atendimentos', (req, res) => res.send('Vocês está na rota de atendimentos e está fazendo um POST'))
}
