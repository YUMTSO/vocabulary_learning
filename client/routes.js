import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import SingleCoffeePage from './components/SingleCoffeePage'
import AllCoffees from './components/AllCoffees'
import {HomePage} from './components/Homepage'
import AboutUs from './components/About-us'
import Cart from './components/Cart'
import {CartCheckoutForm} from './components/CartCheckoutForm'
import {onSubmit} from './components/onSubmit'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    ret