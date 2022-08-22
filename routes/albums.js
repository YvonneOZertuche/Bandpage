const express = require('express')
const router = express.Router()
const dataFile = require('../data/data.json')

let albums = dataFile.data
console.log(albums)

router.get('/albums', (req,res) => {
  res.render('albums', {albums: albums
})
})

router.get('/albums/:albumname', (req,res)=>{
  let albumname = req.params.albumname
  albums.forEach(albumObj => {
    
  })
  console.log(albumname)
  res.send(`here is the album ${albumname}`)
}
)



module.exports = router