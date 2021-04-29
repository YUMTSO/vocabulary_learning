
import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLE_COFFEE = 'GET_SINGLE_COFFEE'
const UPDATE_SINGLE_COFFEE = 'UPDATE_SINGLE_COFFEE'
const ADD_SINGLE_COFFEE = 'ADD_SINGLE_COFFEE'
const REMOVE_SINGLE_COFFEE = 'REMOVE_SINGLE_COFFEE'
const GET_ALL_COFFEES = 'GET_ALL_COFFEES'
const GETTING_ALL_COFFEES = 'GETTING_ALL_COFFEES'

/**
 * INITIAL STATE
 */
const initialState = {
  coffees: [],
  coffee: {},
  loading: false
}

/**
 * ACTION CREATORS
 */
const gettingCoffees = () => ({type: GETTING_ALL_COFFEES, loading: true})

const gotCoffees = coffees => ({
  type: GET_ALL_COFFEES,
  coffees
})

const gotSingleCoffee = coffee => ({
  type: GET_SINGLE_COFFEE,
  coffee
})
