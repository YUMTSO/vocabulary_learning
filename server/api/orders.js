const router = require('express').Router()
const {Orders, OrdersProducts, User, Products} = require('../db/models')

router.get('/cart', async (req, res, next) => {
  tr