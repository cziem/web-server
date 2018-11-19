const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('about', {
    logo: 'serverify',
    pageTitle: 'Get more',
    lead: 'Learn more about serverify\'s API'
  })
})

module.exports = router