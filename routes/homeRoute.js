const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('default.hbs', {
    logo: 'serverify',
    pageTitle: 'welcome to serverify',
    welcomeMsg: 'Welcome to the web-server home',
  })
})

module.exports = router