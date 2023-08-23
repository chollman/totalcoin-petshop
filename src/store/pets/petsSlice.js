import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      name: 'Max',
      weight: 25,
      age: 5,
      race: 'Perro',
      castrated: true,
      ownerId: 1,
    },
    {
      id: 2,
      name: 'Rusi',
      weight: 10,
      age: 3,
      race: 'Gato',
      castrated: true,
      ownerId: 2,
    },
    {
      id: 3,
      name: 'Gonzi',
      weight: 5,
      age: 13,
      race: 'Perro',
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
    addPet: (state, action) => {
      action.payload.id = state.lastId + 1
      state.list.push(action.payload)
      state.lastId += 1
    },
    removePet: (state, action) => {
      state.list = state.list.filter((pet) => pet.id !== action.payload)
    },
  },
})

export const { addPet, removePet } = petsSlice.actions

export default petsSlice.reducer
