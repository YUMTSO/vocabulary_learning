/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Products = db.model('products')

describe('Products model', () => {
  describe('Validations', () => {
    it('requires `name`', async () => {
      const products = Products.build()
      try {
  