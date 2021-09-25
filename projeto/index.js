const customExpres = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('conectado com sucesso')
        app = customExpres()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})

