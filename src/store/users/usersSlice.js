import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      name: 'Claudio',
      password: '1234',
      role: 'vendedor',
    },
  ],
  lastId: 1,
  loggedUser: undefined,
}

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      action.payload.id = state.lastId + 1
      action.payload.role = 'cliente'
      state.list.push(action.payload)
      state.lastId += 1
      state.loggedUser = action.payload
    },
    login: (state, action) => {
      state.loggedUser = action.payload
    },
    logout: (state) => {
      state.loggedUser = undefined
    },
  },
})

export const { addUser, removeUser, login, logout } = usersSlice.actions

export default usersSlice.reducer
