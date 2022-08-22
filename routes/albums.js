const express = require('express')
const router = express.Router()
const dataFile = require('../data/data.json')

let albums = dataFile.data
console.log(albums)

router.get('/albums', (req,res) => {
  res.render('albums', {albums: albums
})
})


router.get('/albums/:shortname', (req,res)=>{
  let shortname = req.params.shortname
  albums.forEach(albumObj => {
    
  })
  console.log(shortname)
  res.send('here is the album')
}
)



module.exports = router