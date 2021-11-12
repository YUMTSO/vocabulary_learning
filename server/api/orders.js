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

///