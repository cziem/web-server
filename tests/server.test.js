const request = require('supertest')
const expect = require('expect')

const app = require('../server').app

describe('GET Requests', () => {

  describe('GET / ', () => {
    it ('should render the home view', function (done) {
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect((res) => {
          expect(res.body).toInclude({
            pageTitle: 'Home Page'
          })
        })
        .expect(200, done)
    })
  })
})


// text/html,application/xhtml+xm…plication/xml;q=0.9,*/*;q=0.8