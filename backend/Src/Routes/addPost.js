const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post("/", async (req, res) => {
    console.log("Acessando rota para adicionar um novo post")
    
    const novoPost = req.body
    console.log(novoPost)

    const conn = await db()

    try {
        const [query] = await conn.query(`INSERT INTO POSTS (title, description, category_id, author_id, views, created_at) VALUES (?, ?, ?, ?, ?, ?)`,
            [novoPost.title, novoPost.desc]
        )
    } catch (error) {
        console.error(error)
    }
})

module.exports = router