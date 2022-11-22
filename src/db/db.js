const { Sequelize } = require('sequelize'),
 path = require('path')

const database = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'webData.sqlite'),
  logging: false
})

module.exports = database