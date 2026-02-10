const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.get('/', async (req, res) => {

    const conexao = await db()

    const posts = await conexao.query('SELECT * FROM POSTS')

    res.send(posts[0])
})

module.exports = router