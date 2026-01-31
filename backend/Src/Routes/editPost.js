const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.put('/', async (req, res) => {
    
    const post = req.body

    console.log("Acessando a rota de editar post")
    console.log(post)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `UPDATE POSTS SET title = ?, author_id = ? WHERE id = ?`,
            [post.title, Number(post.authorId), Number(post.id)]
        )

        if (query.affectedRows === 1) {
            console.log("Post atualizado com sucesso no banco de dados")
            res.status(200).send("Post atualizado com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao atualizar post ao banco de dados")
            res.status(404).send("Falha ao atualizar post ao banco de dados")
            return
        }
    } catch (error) {
        console.error("Erro:", error)
    }

})

module.exports = router