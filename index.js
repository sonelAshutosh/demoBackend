const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 5000

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
