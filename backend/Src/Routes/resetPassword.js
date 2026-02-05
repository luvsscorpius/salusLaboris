const express = require('express')
const router = express.Router()
const db = require('../Config/db')
const bcrypt = require("bcrypt")

router.put('/', async (req, res) => {
    const data = req.body

    try {
        const conexao = await db()

        const [users] = await conexao.query(
            `SELECT * FROM USERS WHERE email = ?`,
            [data.email]
        )

        if (users.length === 0) {
            return res.status(404).send("Usuário não encontrado")
        }

        const senhaCriptografada = await bcrypt.hash(data.senha, 10)

        const [query] = await conexao.query(
            `UPDATE USERS SET password = ? WHERE email = ?`,
            [senhaCriptografada, data.email]
        )

        if (query.affectedRows === 1) {
            return res.status(200).send("Senha atualizada com sucesso")
        }

        return res.status(400).send("Falha ao atualizar a senha")

    } catch (error) {
        console.error(error)
        return res.status(500).send("Erro no servidor")
    }
})


module.exports = router