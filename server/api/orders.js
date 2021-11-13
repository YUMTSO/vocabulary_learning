const router = require('express').Router()
const {Orders, OrdersProducts, User, Products} = require('../db/models')

router.get('/cart', async (req, res, next) => {
  try {
    const orders = await Orders.findAll({include: [{model: Products}]})
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

/// get all the item for the cart for 1 user
router.get('/cart/:userId', async (req, res, next) => {
  try {
    const orders = await Orders.