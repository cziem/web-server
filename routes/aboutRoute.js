const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('about', {
    logo: 'serverify',
    pageTitle: 'Get more',
  })
})

module.exports = router