const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Addresses = db.define('addresses', {
  street: {
    type: Sequelize.STRING,
    uniqu