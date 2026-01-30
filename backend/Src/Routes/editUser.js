const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post('/', async (req, res) => {
    
    const user = req.body

    console.log("Acessando a rota de atualizar usuário")
    console.log(user)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `UPDATE USERS SET name = ?, email = ?, password = ?, description = ? WHERE id = ?`,
            [user.name, user.email, user.password, user.description, user.id]
        )

        if (query.affectedRows === 1) {
            console.log("Usuário atualizado com sucesso no banco de dados")
            res.status(200).send("Usuário atualizado com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao atualizar usuário ao banco de dados")
            res.status(404).send("Falha ao atualizar usuário ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }

})

module.exports = router