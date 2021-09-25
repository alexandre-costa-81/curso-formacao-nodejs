const fs = require('fs')
const path = require('path')

// fs.readFile('./assets/nery.jpg', (erro, buffer) => {
//     if (erro) {
//         console.log(erro)
//     } else {
//         console.log('A imagem foi bufferizada hehehe')
//         console.log(buffer)

//         fs.writeFile('./assets/nery2.jpg', buffer, (erro) => {
//             if (erro) {
//                 console.log(erro)
//             } else {
//                 console.log('A imagem foi escrita')
//             }
//         })
//     }
// })

// fs.createReadStream('./assets/nery.jpg')
//     .pipe(fs.createWriteStream('./assets/nery-stream.jpg'))
//     .on('finish', () => console.log('Foto salva com sucesso'))

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !==1

    if(tipoEhValido){
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = 'Tipo é inválido'
        console.log('Erro! Tipo inválido')
        callbackImagemCriada(erro)
    }
}