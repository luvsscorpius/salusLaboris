const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
const db = require('./Config/db')

app.use(express.json())
app.use(cors())

// importando as rotas
const indexRoute = require('./Routes/index')
const loginRoute = require('./Routes/login')

// usando as rotas

app.use('/', indexRoute)
app.use('/login', loginRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port)
})