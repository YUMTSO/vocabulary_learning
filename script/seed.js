
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
    preparation: 'Whole bean',
    origin: 'Kenya',
    weight: '12 oz',
    quantity: 10,
    price: 24,
    imgUrl:
      ' https://images-na.ssl-images-amazon.com/images/I/91SLInFPjGL._SY355_.jpg'
  },
  {
    name: 'Cruz del Sur Organic Peru Intelligentsia',
    description:
      'RAYOS del SOL EDITION | For the third straight year, four brothers from the village of Alto Ihuamaca in the San Ignacio region anchor our Peru single-origin lineup. This Bourbon lot from the Pintado brothers reminds us of cherry, grape and caramelized sugar.',
    preparation: 'Whole bean',
    origin: 'Peru',
    weight: 12,
    quantity: 10,
    price: 28,
    imgUrl:
      'https://www.intelligentsiacoffee.com/media/catalog/product/cache/small_image/592x275/799896e5c6c37e11608b9f8e1d047d15/c/r/cruz-del-sur-thumbnail_2.jpg'
  },
  {
    name: 'Kungu Maitu Kenya Estate Intelligentsia',
    description:
      'MURAGE EDITION | Marion Wawira’s forebears planted coffee on the family’s Murage farm in mid-1900s, but it was only one among many crops.',
    preparation: 'Whole bean',
    origin: 'Kenya',
    weight: 12,
    quantity: 10,
    price: 24,
    imgUrl:
      ' https://www.intelligentsiacoffee.com/media/catalog/product/cache/small_image/592x275/799896e5c6c37e11608b9f8e1d047d15/k/e/kenya-kungu-maitu-murage-thumbnail.jpg'
  },
  {
    name: 'Zirikana Rwanda',
    description:
      'This years Zirikana comes from Bufcoffee, our oldest partner in Rwanda. In this 16th year of our collaboration, we are proud to present this blend of three lots from three different washing stations.',
    preparation: 'Whole bean',
    origin: 'Western Province, Rwanda',
    weight: 12,
    quantity: 5,
    price: 19.0,
    imgUrl:
      'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6fe3a2e7-bc85-4c80-bc44-6955a0f412bb.JPG'
  },
  {
    name: 'Hair Raiser',
    description:
      'Our finest light roast with slight hints of citrus and honey.',
    preparation: 'Ground OR Whole Beans',
    origin: 'South America',
    weight: '16 oz',
    quantity: 5,
    price: 15.0,
    imgUrl:
      'http://ep.yimg.com/ay/yhst-133788258843600/organic-el-salvador-cuzcachapa-coffee-beans-light-roasted-28.gif'
  },
  {
    name: 'Tokyo Roast',
    description:
      ' A dark roast with hints of cocoa and vanilla. Brew it up in an espresso, you’ve got golden cream! Or, don’t forget to use a trusty french press for a beautiful and complex sip',
    preparation: 'Ground OR Whole Beans',
    origin: 'Japan',
    weight: '16 oz',
    quantity: 5,
    price: 14.5,
    imgUrl:
      'http://www.saltpgh.com/wp-content/uploads/2016/11/Dark-Roast-coffee-bean.jpg'
  },
  {
    name: 'Juggarnaut Espresso',
    description: 'mauris viverra diam vitae quam suspendisse potenti nullam',
    preparation: 'Teal',
    origin: 'Russia',
    weight: 4.6,
    quantity: 12,
    price: 82.48,
    imgUrl:
      'https://www.freshcup.com/wp-content/uploads/2017/04/PercJuggernaut.jpg'
  },
  {
    name: 'Yirgacheffe',
    description: 'pede justo eu massa donec dapibus',
    preparation: 'Crimson',
    origin: 'Philippines',
    weight: 4.3,
    quantity: 99,
    price: 33.13,
    imgUrl: 'http://www.macchomeless.org/wp-content/uploads/2018/03/coffee.jpg'
  },
  {
    name: 'Pate - Peppercorn',
    description: 'nisl duis ac nibh fusce lacus purus',
    preparation: 'Yellow',
    origin: 'Dominican Republic',
    weight: 5.3,
    quantity: 70,
    price: 29.4,
    imgUrl:
      'https://vrteje8p14-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/subscriptions-1824_2x.jpg'
  },
  {
    name: 'Sumatra Musang',
    description: 'in consequat ut nulla sed accumsan felis ut at dolor',
    preparation: 'Aquamarine',
    origin: 'Indonesia',
    weight: 3.2,
    quantity: 74,
    price: 34.49,
    imgUrl:
      'https://5.imimg.com/data5/WQ/JP/MY-10901605/coffee-packaging-bags-500x500.jpg'
  },
  {
    name: 'Kilimanjaro',
    description:
      'cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus',
    preparation: 'Khaki',
    origin: 'Brazil',
    weight: 6.1,
    quantity: 59,
    price: 65.81,
    imgUrl:
      'https://www.bagsandpouches.hk/wp-content/uploads/2016/10/Coffee-Packaging-7.jpg'
  },
  {
    name: 'Cheese - Le Cheve Noir',