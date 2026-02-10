const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post("/", async (req, res) => {
    console.log("Acessando rota para adicionar email na newsletter")

    let { email, created_at } = req.body

    // Validação básica
    if (!email || !created_at) {
        return res.status(400).json({
            message: "Email e created_at são obrigatórios"
        })
    }

    // Normaliza o email
    email = email.trim().toLowerCase()

    try {
        const conn = await db()

        const [query] = await conn.query(
            `
            INSERT INTO NEWSLETTER_SUBSCRIBERS (email, active, created_at)
            VALUES (?, 1, ?)
            ON DUPLICATE KEY UPDATE
                active = 1,
                created_at = VALUES(created_at)
            `,
            [email, created_at]
        )

        if (query.affectedRows === 1) {
            return res.status(200).json({
                message: "Email cadastrado com sucesso na newsletter"
            })
        }

        return res.status(200).json({
            message: "Email já existia e foi reativado na newsletter"
        })

    } catch (error) {
        console.error("Erro ao cadastrar newsletter:", error)

        return res.status(500).json({
            message: "Erro interno do servidor"
        })
    }
})

module.exports = router
