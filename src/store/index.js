import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './users/usersSlice'
import petsSlice from './pets/petsSlice'
import ordersSlice from './orders/ordersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    pets: petsSlice,
    orders: ordersSlice,
  },
})
