const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('contact', {
    logo: 'serverify',
    pageTitle: 'Contact Page',
    contactMsg: 'Let\'s get in touch with you',
    lead: 'We\'d love to hear from you.'
  })
})

module.exports = router