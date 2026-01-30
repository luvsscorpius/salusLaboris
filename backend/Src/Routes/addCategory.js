const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post('/', async (req, res) => {
    console.log("Acessando a rota de adicionar categoria")
})

module.exports = router