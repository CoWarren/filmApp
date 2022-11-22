const User = require('../models/user.model')
const { Router } = require('express')
const userRouter = Router()

userRouter.get('/:username', async (req, res) => {
  const user = await User.findOne({where: { username: req.params.username}})

})

  module.exports = userRouter