import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ],
  lastId: 3,
}

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      action.payload.id = state.lastId + 1
      state.list.push(action.payload)
      state.lastId += 1
    },
    removeOrder: (state, action) => {
      state.list = state.list.filter((pet) => pet.id !== action.payload)
    },
  },
})

export const { addOrder, removeOrder } = ordersSlice.actions

export default ordersSlice.reducer
