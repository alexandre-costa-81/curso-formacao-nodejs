const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'qwer1234',
    database: 'agenda-petshop'
})

module.exports = conexao