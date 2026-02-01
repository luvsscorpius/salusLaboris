const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
app.use(express.json())

require('dotenv').config();
app.use(cors())

// importando as rotas
const indexRoute = require('./Routes/index')
const loginRoute = require('./Routes/login')
const usersRoute = require('./Routes/users')
const resetPassword = require('./Routes/resetPassword')
const forgotPassword = require('./Routes/sendEmail')
const addCategoryRoute = require('./Routes/addCategory')
const addPostRoute = require('./Routes/addPost')
const getCategoriesRoute = require('./Routes/getCategories')
const addUserRoute = require('./Routes/addUser')
const editUserRoute = require('./Routes/editUser')
const editCategoryRoute = require('./Routes/editCategory')
const deleteCategoryRoute = require('./Routes/deleteCategory')
const getPostsRoute = require('./Routes/getPosts')
const editPostsRoute = require('./Routes/editPost')
const deletePostRoute = require('./Routes/deletePost')

// usando as rotas

app.use('/', indexRoute)
app.use('/login', loginRoute)
app.use('/users', usersRoute)
app.use('/resetPassword', resetPassword)
app.use('/forgotPassword', forgotPassword)
app.use('/addCategory', addCategoryRoute)
app.use('/addPost', addPostRoute)
app.use('/getCategories', getCategoriesRoute)
app.use('/addUser', addUserRoute)
app.use('/editUser', editUserRoute)
app.use('/editCategory', editCategoryRoute)
app.use('/deleteCategory', deleteCategoryRoute)
app.use('/getPosts', getPostsRoute)
app.use('/editPost', editPostsRoute)
app.use('/deletePost', deletePostRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port)
})