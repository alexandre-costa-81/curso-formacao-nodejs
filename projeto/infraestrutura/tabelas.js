class Tabelas {
    init(conexao) {
        this.conexao = conexao
        
        this.criateAtendimentos()
    }

    criateAtendimentos() {
        const sql = 'CREATE TABLE atendimentos (id int NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet VARCHAR(20), servico VARCHAR(50) NOT NULL, status VARCHAR(20) NOT NULL, observacoes TEXT, PRIMARY KEY(id))'

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas