const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {
    logo: 'serverify',
    welcomeMsg: 'Severify',
    lead: 'Hey there! Let\'s get you started with'
  })
})

module.exports = router