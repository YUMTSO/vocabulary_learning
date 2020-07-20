import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import {getCoffees} from '../store/products'
import {SingleCoffeeLocalStorage} from './SingleCoffeeLocalStorage'

class LocalStorage extends 