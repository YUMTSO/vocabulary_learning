
import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {fetchCartItems, addToCart} from '../store/cart'

class SingleCoffee extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.findProductIdinCart = this.findProductIdinCart.bind(this)
  }

  componentDidMount() {
    if (this.props.userId) {
      this.props.fetchCartItems(this.props.userId)
    }
  }

  findProductIdinCart(searchId, cart) {
    if (cart[0].products !== undefined) {
      console.log(cart[0].products)
      const matched = cart[0].products.filter(el => {
        return el.id === searchId
      })

      console.log('searchid', searchId)

      console.log('cart', cart)
      console.log('MATCHED', matched)

      return matched[0]
    }
  }

  handleClick(evt) {
    evt.preventDefault()
    console.log('CART LENGHT', this.props.cart.length)
    console.log('coffe id', this.props.coffee.id)