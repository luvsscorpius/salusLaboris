const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
const db = require('./Config/db')

app.use(cors())

// importando as rotas
const indexRoute = require('./Routes/index')

// usando as rotas

app.use('/', indexRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port)
})