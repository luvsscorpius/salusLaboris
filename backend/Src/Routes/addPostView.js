const express = require('express')
const router = express.Router()
const db = require('../Config/db')

router.put('/', async (req, res) => {
    const { id } = req.body
    const conn = await db()

    try {
        const [result] = await conn.query(
            `UPDATE POSTS SET views = views + 1 WHERE id = ?`,
            [Number(id)]
        )

        if (result.affectedRows === 1) {
            console.log("View adicionada com sucesso")
            return res.status(200).json({ message: 'View adicionada com sucesso' })
        }

        return res.status(404).json({ message: 'Post não encontrado' })

    } catch (error) {
        console.error('Erro ao adicionar view:', error)
        return res.status(500).json({ message: 'Erro interno' })
    }
})

module.exports = router