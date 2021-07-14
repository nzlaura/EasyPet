const express = require('express')
 
const db = require('../db/db')

const router = express.Router()

router.post('/login', (req, res) => {
  console.log(req.body)
})
router.post('/register', (req, res) => {
  console.log(req.body)
})
router.post('/user', (req, res) => {
  console.log(req.body)
})

// router.get('/', (req, res) => {
  // db.getFruits()
  //   .then(results => {
  //     res.json({ fruits: results.map(fruit => fruit.name) })
  //     return null
    // })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong with db functions' })
//     })
// })

module.exports = router
