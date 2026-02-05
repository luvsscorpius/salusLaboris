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

            const [query] = await conexao.query(`UPDATE USERS SET password = ? WHERE id = ?`, [data.password]) 

            if (query.affectedRows === 1) {
                console.log("Senha atualizada com sucesso no banco de dados")
                res.status(200).send("Senha atualizada com sucesso no banco de dados")
                return
            } else {
                console.log("Falha ao atualizar senha ao banco de dados")
                res.status(404).send("Falha ao atualizar senha ao banco de dados")
                return
            }

        } else {
            res.status(404).send("Usuário näo encontrado")
        }
    } catch (error){
        res.status(500).send("Erro no servidor")
    }
})

module.exports = router