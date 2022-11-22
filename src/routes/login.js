const User = require('../models/user.model')
const { Router } = require('express')
const loginRouter = Router()

loginRouter.get('/test', (req, res) =>{
  res.send(200)
})

loginRouter.post('/post', async (req, res) => {

  const { username, password } = req.body
  //user input validation 
  if(!username){
    return res.status(400).send({'error': 'Username cannot be empty'})
  }
  if(!password){
    return res.status(400).send({'error': 'Password cannot be empty'})
  }

  if(typeof(username) !== 'string'){
    return res.status(404).send({'error': 'Provide text based'})
  }

  const user = await User.findOne({ where: { username: username}})

  if(!user){
    return res.status(404).send({'error': 'User does not exist'})
  }
  //user authentication for the password
  if(user.password != password){
    return res.status(400).send({'error': 'Please input correct password'})
  }

  return res.status(200).send({
    'id': user.id,
    'username': user.username,
    'email': user.email,
    'createdAt': user.createdAt,
    'updatedAt': user.updatedAt
  })

  
})

// logginRouter.post('/post/', async (req, res) => {
//   // const {username} = req.body
//   // const {password} = req.body
//   const user = await User.findOne(
//    {where: {
//       username: req.body.username,
//       password: req.body.password
//     }})
//     if(!user){
//       res.sendStatus(400)
//     }else if(user){
//       res.sendStatus(200)
//     }
//   // const username  = await User.findAll({where: { username: req.body.username}})
//   // // const user = 
//   // // const { password } = req.body
//   // if(!username){res.send('fail')}
//   // res.status(200)
// })

module.exports = loginRouter
