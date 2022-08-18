const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
  res.send('Index')
  
})

module.exports = router