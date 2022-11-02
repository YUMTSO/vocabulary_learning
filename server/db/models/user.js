const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
    