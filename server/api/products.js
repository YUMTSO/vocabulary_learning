const router = require('express').Router()
const {Products} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
