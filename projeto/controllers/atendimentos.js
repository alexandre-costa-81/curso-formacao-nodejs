module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Vocês está na rota de atendimentos'))
}
