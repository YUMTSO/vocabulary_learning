import React from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import {fetchCartItems} from '../store/cart'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('user id', this.props.userId)
    if (this.props.userId) {
      this.props.fetchCartItems(this.props.userId)
    }
  }

  handleClick(evt) {
    evt.preventDefault()
  }