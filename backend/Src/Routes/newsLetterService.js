const db = require('../Config/db')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

async function sendNewsletter(post) {
    const conn = await db()

    const [emails] = await conn.query(
        `SELECT email FROM NEWSLETTER_SUBSCRIBERS WHERE active = 1`
    )

    if (emails.length === 0) return

    for (const item of emails) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: item.email,
            subject: `📰 Novo post: ${post.title}`,
            html: `
                <div style="font-family: Arial, sans-serif;">
                    <h2>${post.title}</h2>
                    <p>${post.desc}</p>
                    <a href="http://localhost:3000/#/post/${post.id}" style="display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                        Ler post completo
                    </a>
                    <hr />
                    <small>
                        Você recebeu este email porque está inscrito na newsletter.
                    </small>
                </div>
            `
        }

        try {
            await transporter.sendMail(mailOptions)
            console.log(`Email enviado para ${item.email}`)
        } catch (err) {
            console.error(`Erro ao enviar para ${item.email}`, err)
        }
    }
}

module.exports = { sendNewsletter }
