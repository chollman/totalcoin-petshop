import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      name: 'Max',
      weight: 25,
      age: 5,
      castrated: true,
      ownerId: 1,
    },
    {
      id: 2,
      name: 'Rusi',
      weight: 10,
      age: 3,
      castrated: true,
      ownerId: 2,
    },
    {
      id: 3,
      name: 'Gonzi',
      weight: 5,
      age: 13,
      castrated: false,
      ownerId: 2,
    },
  ],
  lastId: 3,
}

export const petsSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    removePet: (state, action) => {
      state.list = state.list.filter((pet) => pet.id !== action.payload)
    },
  },
})

export const { removePet } = petsSlice.actions

export default petsSlice.reducer
