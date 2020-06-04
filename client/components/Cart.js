import React from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import {fetchCartItems} from '../store/cart'

class Cart extends React.Component {
  constructor(p