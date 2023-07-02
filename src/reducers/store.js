// store.js

import { createStore } from 'redux'

// Define actions
export const SET_SELECTED_ID = 'SET_SELECTED_ID'

export const setSelectedId = (id) => ({
  type: SET_SELECTED_ID,
  payload: id,
})

// Define reducers
const initialState = {
  selectedId: 1, // Set initial selected ID here
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload,
      }
    default:
      return state
  }
}

// Create Redux store
const store = createStore(reducer)

export default store
