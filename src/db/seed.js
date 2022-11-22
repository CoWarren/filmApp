const database = require("./db")
// const { User } = require("../models/user.model")


async function seed() {
  await database.sync({ force: true })
  console.log('database seeded!')
}

module.exports = seed