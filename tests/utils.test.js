const expect = require('expect')
const utils = require('../utils/utils')

describe('Utils', () => {

  describe('#add',() => {
    it ('should add two numbers', () => {
      let result = utils.add(3, 4)
    
      expect(result).toBe(7).toBeA('number')
    })
  })

  describe('#square', () => {
    it ('should square a number', () => {
      let result = utils.square(7)
    
      expect(result).toBe(49).toBeA('number')
    })
  })
  
  describe('#verify_names', () => {
    it ('should verify first and last names are set', () => {
      let fullname = 'Synthesis Everest'
      let user = { }
      let verify = utils.setName(user, fullname)
      
      expect(verify).toEqual({
        firstName: 'Synthesis',
        secondName: 'Everest'
      }).toBeA('object')
    })
    
    it ('should verify object includes firstName and secondName props', () => {
      let fullname = 'Synthesis Everest'
      let user = { 
        location: 'Nigeria',
        age: 25,
        role: 'Admin'
      }
      let verify = utils.setName(user, fullname)
      
      expect(verify).toInclude({
        firstName: 'Synthesis',
        secondName: 'Everest'
      }).toBeA('object')
    })
  })

  describe('#async_func', () => {
    it ('should async add two number', (done) => {
      utils.asyncAdd(3, 5, (sum) => {
        expect(sum).toBe(8).toBeA('number')
        done()
      })
    })
    
    it ('should async square a number', (done) => {
      utils.asyncSquare(9, (res) => {
        expect(res).toBe(81).toBeA('number')
        done()
      })
    })
  })
})

