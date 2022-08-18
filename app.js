const express = require('express')
const app = express()
let port = 3000

app.get('/', (req,res) => {
  res.send('Hola Mundo!')
})











app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})