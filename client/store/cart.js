import axios from 'axios'

//ACTION TYPES
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'
const ADDED_TO_CART = 'ADDED_TO_CART'

//ACTION CREATOR

const gotCartItems = items => ({
  type: GOT_CART_ITEMS,
  items
})

const addedToCart = newCartData => ({
  type: ADDED_TO_CART,
  newCartData
})

let initialState = []

//THUNKS
export const fetchCartItems = userId => async dispatch => {
  try {
    if (userId) {
      const {data} = await axios.get(`/api/orders/cart/${userId}`)
      dispatch(gotCartItems(data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (item, cart, userId, quantity) => async dispatch => {
  try {
    if (userId) {
      // axios 