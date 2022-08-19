const express = require('express')
const router = express.Router()

router.get('/users/cool', (req, res) => {
  res.render('users')
})

module.exports = router
