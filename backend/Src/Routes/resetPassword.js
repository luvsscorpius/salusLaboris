const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post('/', async (req, res) => {

    const data = req.body

    try {
        const conexao = await db()

        const [users] = await conexao.query(
            `SELECT * FROM USERS WHERE email = ? AND password = ?`, 
            [data.email, data.password]
        )

        if (users.length > 0) {
            res.status(200).send("Usuário encontrado")

            const query = `UPDATE USERS SET password `

        } else {
            res.status(404).send("Usuário näo encontrado")
        }
    } catch (error){
        res.status(500).send("Erro no servidor")
    }
})

module.exports = router