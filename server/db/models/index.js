const User = require('./user')
const Products = require('./products')
const Addresses = require('./addresses')
const Orders = require('./orders')
const Sequelize = require('sequelize')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great p