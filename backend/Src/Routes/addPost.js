const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post("/", async (req, res) => {
    console.log("Acessando rota para adicionar um novo post")
})

module.exports = router