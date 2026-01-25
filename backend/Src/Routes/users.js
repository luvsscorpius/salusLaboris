const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.get('/', async (req, res) => {

    const conexao = await db()

    const users = await conexao.query('SELECT * FROM USERS')

    console.log(users)
})

module.exports = router