const express = require('express')
const router = express.Router()
const db = require('../Config/db')
const jwt = require('jsonwebtoken')
const bycript = require('bcrypt')

const secretKey = 'teste123'

router.post('/', async (req, res) => {

    const data = req.body

    const conexao = await db()

    const foundUsers = await conexao.query(`SELECT * FROM USERS WHERE email = ?`, [data.email])

    console.log(data.password)
    console.log(foundUsers[0][0].password)

    try {
        bycript.compare(data.password, foundUsers[0][0].password.trim(), async (err, result) => {
            if (err) throw err
            console.log(result)
            if (result) {
                const [users] = await conexao.query(
                    `SELECT * FROM USERS WHERE email = ? AND password = ?`,
                    [data.email, foundUsers[0][0].password.trim()]
                )

                if (users.length > 0) {
                    const token = jwt.sign({ name: users.name }, secretKey, { expiresIn: '1hr' })
                    console.log("Usuário logado")
                    return res.status(200).json({
                        message: "Usuário encontrado",
                        token
                    })
                } else {
                    res.status(404).send("Usuário näo encontrado")
                }
            } else {
                console.log("Senha incorreta")
                res.status(403).send("Usuário näo encontrado")
            }
        })

    } catch (error) {
        res.status(500).send("Erro no servidor")
    }
})

module.exports = router