const express = require('express');
const logginRouter = require('./routes/login');
const regRouter = require('./routes/register');
const userRouter = require('./routes/users')
const app = express();

app.use(express.json())
app.use('/users', userRouter)
app.use('/login', logginRouter)
app.use('/register', regRouter)
app.use('/', express.static('public'))

module.exports = app