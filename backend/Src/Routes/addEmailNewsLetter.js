const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.post("/", async (req, res) => {
    console.log("Acessando rota para adicionar email na newsletter")

    const { email, created_at } = req.body

    if (!email || !created_at) {
        return res.status(400).json({ message: "Email e created_at são obrigatórios" })
    }

    const conn = await db()

    try {
        // Verifica se o email já existe
        const [rows] = await conn.query(
            `SELECT id, active FROM NEWSLETTER_SUBSCRIBERS WHERE email = ?`,
            [email]
        )

        // Se já existir
        if (rows.length > 0) {
            // Se estiver inativo, reativa
            if (!rows[0].active) {
                await conn.query(
                    `UPDATE NEWSLETTER_SUBSCRIBERS 
                     SET active = 1, created_at = ?
                     WHERE email = ?`,
                    [created_at, email]
                )

                return res.status(200).json({ message: "Email reativado na newsletter" })
            }

            return res.status(200).json({ message: "Email já cadastrado na newsletter" })
        }

        // Se não existir, insere
        const [query] = await conn.query(
            `INSERT INTO NEWSLETTER_SUBSCRIBERS (email, active, created_at)
             VALUES (?, ?, ?)`,
            [email, 1, created_at]
        )

        if (query.affectedRows === 1) {
            console.log("Email cadastrado com sucesso na newsletter")
            return res.status(200).json({ message: "Email cadastrado com sucesso" })
        }

        return res.status(400).json({ message: "Erro ao cadastrar email" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
})

module.exports = router
