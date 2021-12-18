const router = require('express').Router()
const {Products} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const coffees = await Products.findAll()
    res.json(coffees)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleCoffee = await Products.findByPk(req.params.id)
    res.json(singleCoffee)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCoffee = await Products.create(req.body)
    res.status(200).json(newCoffee)
  } catch (e