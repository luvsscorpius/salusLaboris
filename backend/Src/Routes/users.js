const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.get('/', async (req, res) => {

    const conexao = await db()

    const users = await conexao.query('SELECT * FROM USERS')

    res.send(users[0])
})

module.exports = router