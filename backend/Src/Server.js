const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')

app.use(express.json())
app.use(cors())

// importando as rotas
const indexRoute = require('./Routes/index')
const loginRoute = require('./Routes/login')
const usersRoute = require('./Routes/users')

// usando as rotas

app.use('/', indexRoute)
app.use('/login', loginRoute)
app.use('/users', usersRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port)
})