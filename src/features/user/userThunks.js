import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postRequest } from '../../utils/urls'

export const registerUser = createAsyncThunk('user/registerUser', async(user, thunkAPI) => {
  
  try {
    const response = await postRequest('user/register', user, null, 'POST')
    const data = await response.json()

    if(!response.ok) throw new Error(data.message)
    return data
  } 
  catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  } 

})

export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI) => {
  
  try {
    const response = await postRequest('user/login', user, null, 'POST')
    const data = await response.json()

    if(!response.ok) throw new Error(data.message)
    return data
  } 
  catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  } 

})

export const updateUser = createAsyncThunk('user/updateUser', async(user, thunkAPI) => {

  try{
    const token = thunkAPI.getState().user.user.token
    const response = await postRequest('user/updateUser', user, token, 'PATCH')
    const data = await response.json()

    if(!response.ok) throw new Error(data.message)
    return data

  }
  catch(error) {
    return thunkAPI.rejectWithValue(error.message)
  }

})