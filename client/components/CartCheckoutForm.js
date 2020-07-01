
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export class CartCheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      street: '',
      zipcode: '',
      city: '',
      state: '',
      phone: 0,
      country: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState(([evt.target.name] = evt.target.value))
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      address: '',
      street: '',
      zipcode: '',
      city: '',
      state: '',
      phone: 0,
      country: ''
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}