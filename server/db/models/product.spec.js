/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Products = db.model('products')

describe('Products model', () => {
  describe('Validations', () => {
    it('requires `name`', async () => {
      const products = Products.build()
      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed without `name`'
        )
      } catch (err) {
        expect(err.message).to.contain('name cannot be null')
      }
    })

    it('requires `name` to not be an empty string', async () => {
      const products = Products.build({
        name: ''
      })

      try {
        await products.validate()
        throw Error(
          'validation was successful but should have failed if name is an empty string'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation error')
        /* handle error */
      }
    }) // end of name



    it('requires `