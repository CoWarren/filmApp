const seed = require("./db/seed");

const app = require("./app"),
  PORT = 5001;

  app.listen(PORT, async () => {
    console.log(`app listening on http://localhost:${PORT}`)
    await seed()
  })
