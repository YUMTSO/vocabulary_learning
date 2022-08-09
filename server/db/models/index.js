const User = require('./user')
const Products = require('./products')
const Addresses = require('./addresses')
const Orders = require('./orders')
const Sequelize = require('sequelize')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Addresses.belongsTo(User)
User.hasMany(Addresses)

User.hasMany(Orders)

const OrdersProducts = db.define('OrdersProducts', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

Orders.belongsToMany(Products, {thro