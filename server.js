const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials')
app.set('voew engine', 'hbs')

// middlewares
app.use((req, res, next) => {
  let now = new Date().toString()
  let log = `${now}: ${req.method} : ${req.url}`

  console.log(log)
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log')
    }
  })
  next()
})

// Run this only in maintenance mode
// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public'))

// register helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

// basic routes
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>')
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMsg: 'Welcome to the web-server home',
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  })
})

app.get('/bad', (req, res) => {
  res.send({
    error: 'Your request was bad'
  })
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})