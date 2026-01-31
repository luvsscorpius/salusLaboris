const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post('/', async (req, res) => {
    
    const categoria = req.body

    console.log("Acessando a rota de adicionar categoria")
    console.log(categoria)

    const conn = await db()

    try {
        const [query] = await conn.query(
            `INSERT INTO CATEGORIES (title, author_id, created_at) VALUES (?, ?, ?)`,
            [categoria.title, categoria.authorId, categoria.created_at]
        )

        if (query.affectedRows === 1) {
            console.log("Categoria inserida com sucesso no banco de dados")
            res.status(200).send("Categoria inserida com sucesso no banco de dados")
            return
        } else {
            console.log("Falha ao inserir categoria ao banco de dados")
            res.status(404).send("Falha ao inserir categoria ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }

})

module.exports = router