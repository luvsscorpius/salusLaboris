const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.delete('/', async (req, res) => {
    
    const categoriaId = req.body

    console.log("Acessando a rota de deletar categoria")
    console.log(categoriaId)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `DELETE FROM CATEGORIES WHERE id = ?`,
            [categoriaId.id]
        )

        if (query.affectedRows === 1) {
            console.log("Categoria deletada com sucesso no banco de dados")
            res.status(200).send("Categoria deletada com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao deletar categoria ao banco de dados")
            res.status(404).send("Falha ao deletar categoria ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }

})

module.exports = router