const express = require('express')
const router = express.Router()
const db = require('../Config/db')
const { sendNewsletter } = require('./newsLetterService')

router.post("/", async (req, res) => {
    console.log("Acessando rota para adicionar um novo post")

    const novoPost = req.body
    console.log(novoPost)

    const conn = await db()

    try {
        const [query] = await conn.query(`INSERT INTO POSTS (title, description, category_id, author_id, views, created_at) VALUES (?, ?, ?, ?, ?, ?)`,
            [novoPost.title, novoPost.desc, novoPost.categoryId, novoPost.authorId, novoPost.views, novoPost.created_at]
        )

        if (query.affectedRows === 1) {
            console.log("Post inserido com sucesso no banco de dados")
            res.status(200).send("Post inserido com sucesso no banco de dados")

            setImmediate(() => {
                sendNewsletter({
                    id: query.insertId,
                    title: novoPost.title,
                    desc: truncateText(novoPost.desc, 120)
                })
            })

            return
        } else {
            console.log("Falha ao inserir post ao banco de dados")
            res.status(404).send("Falha ao inserir post ao banco de dados")
            return
        }
    } catch (error) {
        console.error(error)
    }
})

module.exports = router