import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './users/usersSlice'
import petsSlice from './pets/petsSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    pets: petsSlice,
  },
})
