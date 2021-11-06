
'use strict'

const db = require('../server/db')
const {
  User,
  Products,
  Addresses,
  Orders,
  OrdersProducts
} = require('../server/db/models')

const seedProducts = [
  {
    name: 'Peruvian Geisha',
    description:
      'For the third straight year, four brothers from the village of Alto Ihuamaca in the San Ignacio region anchor our Peru single-origin lineup. This Bourbon lot from the Pintado brothers reminds us of cherry, grape and caramelized sugar.',
    preparation: 'Whole bean',
    origin: 'San Ignacio, Peru',
    weight: '12 oz',
    quantity: 10,
    price: 18.0,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91SLInFPjGL._SY355_.jpg'
  },
  {
    name: 'Fancy Intelligentsia',
    description:
      'MURAGE EDITION | Marion Wawira’s forebears planted coffee on the family’s Murage farm in mid-1900s, but it was only one among many crops. When Marion recently prioritized coffee and adopted an explicit focus on quality, we took notice.',