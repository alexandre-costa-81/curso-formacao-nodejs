class Tabelas {
    init(conexao) {
        this.conexao = conexao
        
        this.criateAtendimentos()
        this.criarPets()
    }

    criateAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet VARCHAR(20), servico VARCHAR(50) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status VARCHAR(20) NOT NULL, observacoes TEXT, PRIMARY KEY(id))'

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS pets(id INT NOT NULL AUTO_INCREMENT, nome VARCHAR(50), imagem VARCHAR(200), PRIMARY KEY (id))'

        this.conexao.query(query, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pets foi criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas