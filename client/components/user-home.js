import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllCoffees from './AllCoffees'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, 