const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post('/', (req, res) => {

    const data = req.body
    console.log(data)

    const foundUser = db.find(user => (user.email === data.email && user.password === data.password))

    if (foundUser) {
        console.log("Usuário encontrado")
        res.send("Usuário encontrado").status(200)
    } else if (foundUser === undefined) {
        res.send("Usuário não encontrado").status(404)
    }
})

module.exports = router