import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {getSingleCoffee} from '../store'
import {addToCart} from '../store/cart'

export class SingleCoffe