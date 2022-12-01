import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLocalStorage } from '../../utils/localStorage'
import { postRequest } from '../../utils/urls'
import { getNotification } from '../../utils/utilFunctions'

const initialState = { user: null, anyUser: '', isLoading: false }

export const registerUser = createAsyncThunk('user/registerUser', async(user, thunkAPI) => {
  try {

    const response = await postRequest('user/register', user)
    const data = await response.json()
    return data
    
  } catch (error) {
    console.log(error)
  } 
})

export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI) => {
  try {

    const response = await postRequest('user/login', user)
    const data = await response.json()
    return data
    
  } catch (error) {
    console.log(error)
  } 
})

const userSlice = createSlice(
  {
    name: 'user',
    initialState,
    reducers: {

      loadUser(state, action) {
        state.anyUser = action.payload
      },

      fetchUserData(state,action) {
        state.user = action.payload
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, payload) => {
        state.isLoading = false
        setLocalStorage(payload.data)
        state.user = 'payload'
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false
        console.log('oh no')
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload} ) => {
        const { data } = payload 
        console.log(payload)
        state.user = data
        setLocalStorage(data)
        state.isLoading = false
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false
        console.log('oh no')
      })
  }
})

export const { loadUser, fetchUserData } = userSlice.actions
export default userSlice.reducer
