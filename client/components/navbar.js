
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbarfunc = ({handleClick, isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <div>