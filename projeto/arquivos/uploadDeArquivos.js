const fs = require('fs')

fs.readFile('./assets/nery.jpg', (erro, buffer) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('A imagem foi bufferizada hehehe')
        console.log(buffer)

        fs.writeFile('./assets/nery2.jpg', buffer, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('A imagem foi escrita')
            }
        })
    }
})