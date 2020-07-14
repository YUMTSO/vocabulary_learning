
import React from 'react'
import {connect} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

export const HomePage = props => {
  return (
    <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1525797559391-d6c6fd668582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Coffee Slide 1"
          />
          <Carousel.Caption>
            <h1>Welcome to Expresso.js</h1>