const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post('/', async (req, res) => {
    
    const user = req.body

    console.log("Acessando a rota de adicionar usuário")
    console.log(user)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `INSERT INTO USERS (name, email, password, description, created_at) VALUES (?, ?, ?, ?, ?)`,
            [user.name, user.email, user.password, user.description, user.created_at]
        )

        if (query.affectedRows === 1) {
            console.log("Usuário inserido com sucesso no banco de dados")
            res.status(200).send("Usuário inserido com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao inserir usuário ao banco de dados")
            res.status(404).send("Falha ao inserir usuário ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }

})

module.exports = router