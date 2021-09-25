const fs = require('fs')

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
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}`

    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(novoCaminho))
}