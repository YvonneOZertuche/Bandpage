const express = require('express')
const router = express.Router()
const dataFile = require('../data/data.json')

let albums = dataFile.data
console.log(albums)




// router.get('/albums/:', (req, res) => {
//   let shortname = req.params.shortname
//   albums.forEach(albumObj => {})
//   console.log(shortname)
//   res.send('here is the album cover')


// })

module.exports = router

