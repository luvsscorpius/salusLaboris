const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.delete('/', async (req, res) => {
    
    const user = req.body

    console.log("Acessando a rota de deletar usuários")
    console.log(user)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `DELETE FROM USERS WHERE id = ?`,
            [user.id]
        )

        if (query.affectedRows === 1) {
            console.log("Usuário deletado com sucesso no banco de dados")
            res.status(200).send("Usuário deletado com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao deletar usuário ao banco de dados")
            res.status(404).send("Falha ao deletar usuário ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }

})

module.exports = router