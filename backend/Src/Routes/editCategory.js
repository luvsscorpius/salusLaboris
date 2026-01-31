const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.put('/', async (req, res) => {
    
    const categoria = req.body

    console.log("Acessando a rota de editar categoria")
    console.log(categoria)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `UPDATE CATEGORIES SET title = ?, author_id = ? WHERE id = ?`,
            [categoria.title, Number(categoria.authorId), Number(categoria.id)]
        )

        if (query.affectedRows === 1) {
            console.log("Categoria atualizada com sucesso no banco de dados")
            res.status(200).send("Categoria atualizada com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao atualizar categoria ao banco de dados")
            res.status(404).send("Falha ao atualizar categoria ao banco de dados")
            return
        }
    } catch (error) {
        console.error("Erro:", error)
    }

})

module.exports = router