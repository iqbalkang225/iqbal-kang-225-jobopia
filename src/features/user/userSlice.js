import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth, db } from '../../firebase'
import { getNotification } from '../../utils/utilFunctions'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'

const initialState = { currentUser: {}, isLoading: false }

const userSlice = createSlice(
  {
    name: 'user',
    initialState,
    reducers: {
      
      loadUser(state, action) {
        state.currentUser.loggedIn = action.payload
        // state.currentUser.email = action.payload.email
        // state.currentUser.name = action.payload.name
      },

      fetchUserData(state,action) {
        state.currentUser = action.payload
      }
  }
})

export const { loadUser, fetchUserData } = userSlice.actions
export default userSlice.reducer
