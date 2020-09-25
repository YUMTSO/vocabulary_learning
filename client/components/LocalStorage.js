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

  addItem(id) {
    const newItem = {
      id: id,
      value: 1
    }
    const list = [...this.state.list]

    list.push(newItem)

    this.setState({
      list,
      newItem: ''
    })
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list]
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList})
  }

  findId(list, id) {
    return list.map(el => el.id).includes(id)
  }

  updateInput(id) {
    const list = [...this.state.list]

    const updatedList = list.map(el => {
      if (el.id === id) {
        el.value += 1
      }
      return el
    })

    this.setState({list: updatedList})
  }

  render() {
    const {coffees, loading} = this.props.coffees

    return (
      <div>
        <header>
          <h1>Shopping Cart Local Storage</h1>
        </header>

        <div>
          {coffees && !loading ? (
            <Container>
              local storage render
              <CardColumns>
                {coffees.map(coffee => (
                  <div key={coffee.id}>
                    <Card style={{width: '18rem'}}>
                      <Card.Img variant="top" src={coffee.imgUrl} />
                      <Card.Body>
                        <Card.Title>{coffee.name}</Card.Title>
             