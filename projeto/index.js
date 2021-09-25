const customExpres = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        app = customExpres()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})

