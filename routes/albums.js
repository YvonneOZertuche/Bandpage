const express = require(`express`)
const router = express.Router()

//import data to this file from the json file
let dataFile = require(`../data/data.json`)

let albums = dataFile.albums
// console.log(albums);

router.get(`/album`, (req, res) => {
  res.render(`albums`, {
    albums: albums
  })
  // console.log(albums)
})

router.get(`/albums/:shortname`, (req, res) => {
  let shortname = req.params.shortname
  let albumName = []
  let photos = []
  let playList = []
  albums.forEach(albumsObject => {
    if (albumsObject.shortname == shortname) {
      albumName.push(albumsObject)
      photos = albumsObject.artwork
      playList = albumsObject.albumSM

    }
    console.log(photos)
    console.log(playList)
  })
  res.render('albumPage', {
    artwork: photos,
    albumName: albumName
  })
 
  console.log(albumName)
})

module.exports = router





// const express = require('express')
// const router = express.Router()
// const dataFile = require('../data/data.json')

// let albums = dataFile.data
// // console.log(albums)

// router.get('/albums', (req,res) => {
//   res.render('albums', {albums: albums
// })
// })

// router.get('/albums/:albumname', (req,res)=>{
//   let albumname = req.params.shortname
//   albums.forEach(albumObj => {
    
//   })
//   console.log(albumname)
//   res.send(`here is the album ${shortname}`)
// }
// )



module.exports = router