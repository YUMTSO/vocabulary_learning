const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Addresses = db.define('addresses', {
  street: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  zipcode: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
