const customExpres = require('./config/customExpress')

app = customExpres()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))
