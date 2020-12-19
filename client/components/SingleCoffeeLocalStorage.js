import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const SingleCoffeeLocalStorage = props => {
  const {name, imgUrl, price, id} = props.coffee

  return (
    <div>
      <Card style={{width: '18rem'}}>
        <Card.Img va