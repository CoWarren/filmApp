const User = require('../models/user.model')
const { Router } = require('express')
const regRouter = Router()

regRouter.post('/', async (req, res) => {
  const { username, email, password } = req.body
  if(!username){
    return res.status(400).send({'error': 'Username cannot be empty'})
  }
  if(!password){
    return res.status(400).send({'error': 'Password cannot be empty'})
  }
  if(!email){
    return res.status(400).send({'error': 'Email cannot be empty'})
  }
  await User.create(
    {
      username: username,
      email: email,
      password: password
    })
  res.status(200).send({'message': 'Sucessfully Registered'})
})
module.exports = regRouter