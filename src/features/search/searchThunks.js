import { createAsyncThunk } from "@reduxjs/toolkit"
import { postRequest, URL } from "../../utils/urls";

export const getJobs = createAsyncThunk('search/getJobs', async(query, thunkAPI) => {

  const { status, jobType, search, sort } = query

  let requestURL = `${URL}jobs?status=${status}&jobType=${jobType}&sort=${sort}`

  if(search) {
    requestURL = `${requestURL}&search=${search}`
  }

  try {
    const response = await fetch(requestURL, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`
      }
    })
    const data = await response.json()
    
    if(!response.ok) throw new Error(data.message)
    return data
  }
  catch(error) {
    return thunkAPI.rejectWithValue(error.message)
  }

})

export const deleteJob = createAsyncThunk('search/deleteJob', async(jobID, thunkAPI) => {

  try {
    const token = thunkAPI.getState().user.user.token
    const response = await postRequest(`jobs/${jobID}`, null, token, 'DELETE' )
    const data = await response.json()
    
    thunkAPI.dispatch(getJobs())
    if(!response.ok) throw new Error(data.message)
    return data

  }
  catch(error) {
    return thunkAPI.rejectWithValue(error.message)
  }

})