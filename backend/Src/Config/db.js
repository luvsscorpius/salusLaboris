const mysql = require('mysql2/promise')

const connection = async () => {
    try {
        const conexao = await mysql.createConnection({
            host: 'auth-db1198.hstgr.io',
            user: 'u547344600_salus',
            password: '$Anderson#1',
            database: 'u547344600_salus',
            port: 3306
        })

        console.log('Conexão bem sucedida com o banco de dados')
        return conexao
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados', error)
        throw new error
    }
}

module.exports = connection