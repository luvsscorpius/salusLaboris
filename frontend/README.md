# 🏥 Salus Laboris

Sistema web desenvolvido para o Instituto Salus Laboris, com o objetivo de apresentar os serviços da empresa, facilitar o contato com clientes e disponibilizar informações relacionadas à saúde ocupacional, segurança do trabalho e gestão empresarial.

## 📖 Sobre o Projeto

A plataforma foi desenvolvida utilizando uma arquitetura Full Stack, composta por um frontend moderno em React, uma API REST desenvolvida em Node.js e um banco de dados MySQL para armazenamento e gerenciamento das informações.

O sistema foi projetado para oferecer uma experiência intuitiva, responsiva e de fácil navegação em diferentes dispositivos.

## 🚀 Tecnologias Utilizadas

### Frontend
- React.js
- React Router DOM
- Axios
- Styled Components
- HTML5
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Cors
- Dotenv

### Banco de Dados
- MySQL

### Controle de Versão
- Git
- GitHub

---

## ✨ Funcionalidades

- Página institucional responsiva
- Apresentação dos serviços da empresa
- Formulário de contato
- Integração com API REST
- Gerenciamento de informações dinâmicas
- Sistema de autenticação
- Comunicação com banco de dados MySQL
- Layout otimizado para dispositivos móveis e desktops

---

## 📂 Estrutura do Projeto

```bash
salus-laboris/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── database/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Instalação e Configuração

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/salus-laboris.git
```

### Frontend

```bash
cd frontend

npm install

npm start
```

### Backend

```bash
cd backend

npm install

npm run dev
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na pasta do backend:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=salus_laboris

JWT_SECRET=sua_chave_secreta
```

---

## 🔗 API REST

Exemplos de endpoints utilizados pela aplicação:

```http
GET    /api/services
POST   /api/contact
POST   /api/auth/login
GET    /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

---

## 📱 Responsividade

A aplicação foi desenvolvida para funcionar adequadamente em:

- Smartphones
- Tablets
- Notebooks
- Computadores Desktop

---

## 🎯 Objetivo

Oferecer uma plataforma moderna e eficiente para divulgação dos serviços da Salus Laboris, fortalecendo sua presença digital e facilitando a comunicação com clientes e parceiros.

---

## 👨‍💻 Desenvolvedor

**Anderson Vitor**

Desenvolvedor Full Stack especializado em:

- React.js
- Node.js
- Express.js
- MySQL
- APIs REST
- JavaScript

---

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da Salus Laboris.

Todos os direitos reservados.
