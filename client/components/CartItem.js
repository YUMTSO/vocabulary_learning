import React from 'react'
import Card from 'react-bootstrap/Card'

const CartItem = props => {
  const {imgUrl, quantity, price, weight, name} = props.item
  //const qty = props.item.OrdersProducts.quantity
  return (
    <Card style={{width: '600px'}} className="cart">
      <Card.Bod