const Modelo = require('./ModeloTabelaFornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado')

module.exports = {
    listar() {
        return Modelo.findAll()
    },
    inserir(fornecedor) {
        return Modelo.create(fornecedor)
    },
    async pegarPorId(id) {
        const fornecedor = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!fornecedor) {
            throw new NaoEncontrado('Fornecedor não encontrado')
        }

        return fornecedor
    },
    atualizar(id, dadosParaAtualizar) {
        return Modelo.update(dadosParaAtualizar, { where: { id: id } }
        )
    },
    remover(id) {
        return Modelo.destroy({ where: { id: id }})
    }
}