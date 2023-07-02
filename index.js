const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000

app.use(
  cors({
    origin: '*',
  })
)

app.get('/', (req, res) => {
  const obj = {
    name: 'Dummy',
    text: 'Hello from Backend',
  }
  res.json(obj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
