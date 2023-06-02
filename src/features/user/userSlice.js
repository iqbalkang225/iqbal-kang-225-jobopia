import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../../utils/localStorage'
import { toast } from 'react-toastify'
import { registerUser, loginUser, updateUser } from './userThunks'

const initialState = { 
  user: getLocalStorage(), 
  anyUser: '', 
  isLoading: false 
}

const setFulfilledState = (state, payload, message) => {
  const { user } = payload.data
  state.user = {...user}
  setLocalStorage({...user})
  toast.success(message ? `${message} ${user.name}` : 'User updated')
  state.isLoading = false
}

const userSlice = createSlice(
  {
    name: 'user',
    initialState,
    reducers: {

      loadUser(state, action) {
        // state.anyUser = action.payload
      },

      fetchUserData(state,action) {
        state.user = action.payload
      },

      logoutUser(state, action) {
        state.user = null
        removeLocalStorage()
      }
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        setFulfilledState(state, payload, 'Hello there')
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      // Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload} ) => {
        setFulfilledState(state, payload, 'Welcome back')
      })
      .addCase(loginUser.rejected, (state, { payload } ) => {
        toast.error(payload)
        state.isLoading = false
      })
      // Update User
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        setFulfilledState(state, payload)
      })
      .addCase(updateUser.rejected, (state, { payload } ) => {
        toast.error(payload)
        state.isLoading = false
      })
  }
})

export const { loadUser, fetchUserData, logoutUser } = userSlice.actions
export default userSlice.reducer
