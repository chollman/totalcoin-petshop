import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      date: new Date().toDateString(),
      delivered: true,
      amount: 5,
      complement1: 1,
      complement2: 0,
      petId: 1,
      customerId: 1,
    },
    {
      id: 2,
      date: new Date().toDateString(),
      delivered: false,
      amount: 10,
      complement1: 3,
      complement2: 1,
      petId: 1,
      customerId: 1,
    },
  ],
  lastId: 2,
}

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const calculateAmount = (pet) => {
        if (pet.race === 'Perro') {
          return pet.weight * 0.8
        } else {
          return pet.weight * 0.5
        }
      }

      const calculateComplement1 = (pet) => {
        if (pet.race === 'Perro') {
          return Math.floor(pet.age / 3)
        } else {
          if (pet.age > 5) {
            return 1
          } else {
            return 0
          }
        }
      }

      const calculateComplement2 = (pet) => {
        let res = 0
        if (pet.race === 'Perro') {
          res = pet.castrated && pet.age > 5 ? 1 : 0
        } else {
          res = pet.castrated ? 1 : 0
        }
        return res
      }

      const order = {
        id: state.lastId + 1,
        date: new Date().toDateString(),
        delivered: false,
        amount: calculateAmount(action.payload.pet),
        complement1: calculateComplement1(action.payload.pet),
        complement2: calculateComplement2(action.payload.pet),
        petId: action.payload.pet.id,
        customerId: action.payload.user.id,
      }

      state.list.push(order)
      state.lastId += 1
    },
    removeOrder: (state, action) => {
      state.list = state.list.filter((pet) => pet.id !== action.payload)
    },
  },
})

export const { addOrder, removeOrder } = ordersSlice.actions

export default ordersSlice.reducer
