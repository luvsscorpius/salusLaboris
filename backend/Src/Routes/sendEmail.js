const express = require("express")
const router = express.Router()
const db = require("../Config/db")

const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const senha = 'minhasenha'
require('dotenv').config();

router.post("/", async (req, res) => {
    console.log("Acessando rota de esqueceu senha")

    const user = req.body

    const conn = await db()

    const [query] = await conn.query(
        `SELECT * FROM USERS WHERE email = ?`,
        [user.email]
    )

    console.log()

    if (query.length > 0) {

        // gerando um token de recuperacao de senha
        const token = jwt.sign({ id: query[0].id }, senha, { expiresIn: '1hr' })

        // Configurando o transporte de email
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            secure: true,
            secureConnection: false,
            tls: {
                ciphers: "SSLv3",
            },
            requireTLS: true,
            port: 465,
            debug: true,
            connectionTimeout: 10000,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // Enviando o email com o token
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Redefinição de senha',
            // Utilizando html aqui ao inves de text para deixar o email personalizavel
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #2E86C1;">Olá, ${query[0].name}!</h2>
                    <p>Recebemos uma solicitação para redefinir sua senha.</p>
                    <p>Para continuar com o processo de redefinição, clique no botão abaixo:</p>
                    <a href="http://localhost:3000/#/login/recuperarasenha?token=${token}" 
                       style="display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                       Redefinir Senha
                    </a>
                    <p style="margin-top: 20px;">Se você não solicitou essa alteração, ignore este e-mail.</p>
                    <p>Atenciosamente,<br/>Equipe de Suporte</p>
                    <div style="margin-top: 30px; font-size: 12px; color: #999;">
                        <p>Este é um e-mail automático, por favor não responda.</p>
                    </div>
                </div>
            `,
        }

        try {
            await transporter.sendMail(mailOptions)
            console.log("E-mail enviado com sucesso")
            return res.status(200).json({
                message: "E-mail enviado com sucesso",
            });
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error) // Adicione esta linha
            res.status(500).json({ message: 'Erro ao enviar e-mail', error })
        }

        return
    }

    return res.status(404).send("E-mail não encontrado")
})

module.exports = router