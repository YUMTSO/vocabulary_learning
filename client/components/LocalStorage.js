import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import {getCoffees} from '../store/products'
import {SingleCoffeeLocalStorage} from './SingleCoffeeLocalStorage'

class LocalStorage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: []
    }
  }

  componentDidMount() {
    this.props.getCoffees()
    this.hydrateStateWithLocalStorage()
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage()
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key)
        try {
          value = JSON.parse(value)
          this.setState({[key]: value})
        } catch (e) {
          // handle empty string
          this.setState({[key]: value})
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }

  add