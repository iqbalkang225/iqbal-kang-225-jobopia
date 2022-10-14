import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth } from '../user/../../firebase'
import { toast } from 'react-toastify'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const initialState = {
  user: null,
  isLoading: false,
}

const formatMessage = message => {
  const lastIndexSlash = message.lastIndexOf('/') + 1
  const lastIndexOfBracket = message.lastIndexOf(')')
  return message
    .substring(lastIndexSlash, lastIndexOfBracket)
    .split('-')
    .join(' ')
}

const getNotification = (type, message) => {
  return toast[type](
    !message.includes('/') ? message : formatMessage(message),
    {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      theme: 'dark',
    }
  )
}

const authUser = authType => {
  return createAsyncThunk('user/regusterUser', async (user, asyncAPI) => {
    try {
      const res = await authType(auth, user.email, user.password)
      getNotification('success', 'Welcome')
      console.log(res)
    } catch (err) {
      getNotification('error', err.message)
    }
  })
}

export const registerUser = authUser(createUserWithEmailAndPassword)
export const loginUser = authUser(signInWithEmailAndPassword)

// export const registerUser = createAsyncThunk(
//   'user/regusterUser',
//   async (user, asyncAPI) => {
//     try {
//       const res = await createUserWithEmailAndPassword(
//         auth,
//         user.email,
//         user.password
//       )
//       getNotification('success', 'Welcome')
//       console.log(res)
//     } catch (err) {
//       getNotification('error', err.message)
//     }
//   }
// )

// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async (user, asyncAPI) => {
//     try {
//       const res = await signInWithEmailAndPassword(
//         auth,
//         user.email,
//         user.password
//       )
//       getNotification('success', 'Welcome')
//     } catch (err) {
//       getNotification('error', err.message)
//     }
//   }
// )

const userSlice = createSlice({
  name: 'user',
  initialState,
  // reducers: {},

  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
      console.log(payload)
    },
    [registerUser.fulfilled]: (state, { payload }) => {},
    [registerUser.rejected]: state => {},
  },
})

export default userSlice.reducer
