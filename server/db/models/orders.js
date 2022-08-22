const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', 