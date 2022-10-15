import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { auth } from '../user/../../firebase'
import { getNotification } from '../../utils/utilFunctions'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const initialState = {
  user: null,
  isLoading: false,
}

const authUser = authType => {
  return createAsyncThunk('user/regusterUser', async (user, asyncAPI) => {
    try {
      await authType(auth, user.email, user.password)
      getNotification('success', 'Welcome')
    } catch (err) {
      getNotification('error', err.message)
    }
  })
}

export const registerUser = authUser(createUserWithEmailAndPassword)
export const loginUser = authUser(signInWithEmailAndPassword)

const userSlice = createSlice(
  {
    name: 'user',
    initialState,
    reducers: {
      loadUser(state, action) {
        state.user = action.payload
      },
  }

})

export const { loadUser } = userSlice.actions

export default userSlice.reducer
