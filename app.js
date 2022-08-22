const express = require('express')
const app = express()
let port = 3000

app.set('view engine', 'ejs')//ejs templates
app.use(express.static('public'))//static assests
app.use(require('./routes/index')) //route for main page - display all cover images
app.use(require('./routes/albums'))//route to individual album info
// app.use(require('./routes/contact'))
//app.use(require('./routes/chat'))


//Default route
app.get('/', (req,res) => {
  res.send('!Hola Mundo!')
})

//Checking to see that server is working
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})