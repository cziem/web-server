const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  })
})

module.exports = router