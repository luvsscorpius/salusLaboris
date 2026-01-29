const express = require('express')
const router = express.Router()
const db = require('../Config/db')
const jwt = require('jsonwebtoken')

const secretKey = 'teste123'

router.post('/', async (req, res) => {

    const data = req.body

    try {
        const conexao = await db()

        const [users] = await conexao.query(
            `SELECT * FROM USERS WHERE email = ? AND password = ?`, 
            [data.email, data.password]
        )

        if (users.length > 0) {
            const token = jwt.sign({name: users.name}, secretKey, {expiresIn: '1hr'})
            return res.status(200).json({token}).send("Usuário encontrado")
        } else {
            res.status(404).send("Usuário näo encontrado")
        }

    } catch (error){
                res.status(500).send("Erro no servidor")
    }
})

module.exports = router