const express = require('express')
const app = express()
const port = 3000

// importando as rotas
const indexRoute = require('./Routes/index')

// usando as rotas

app.use('/', indexRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port)
})