const ValorNaoSuportado = require("./erros/ValorNaoSuportado")

class Serealizador {
    json(dados) {
        JSON.stringify(dados)
    }

    serealizar(dados) {
        if (this.contentType == 'application/json') {
            this.json(dados)
        }

        throw new ValorNaoSuportado(this.contentType)
    }
}