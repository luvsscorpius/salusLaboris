const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.delete('/', async (req, res) => {
    
    const postId = req.body

    console.log("Acessando a rota de deletar post")
    console.log(postId)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `DELETE FROM POSTS WHERE id = ?`,
            [postId.id]
        )

        if (query.affectedRows === 1) {
            console.log("Post deletado com sucesso no banco de dados")
            res.status(200).send("Post deletado com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao deletar post ao banco de dados")
            res.status(404).send("Falha ao deletar post ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }

})

module.exports = router