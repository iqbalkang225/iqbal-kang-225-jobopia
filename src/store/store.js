import { configureStore } from '@reduxjs/toolkit'
import uiSlice from '../features/ui/uiSlice'
import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    ui: uiSlice
  },
})

export default store
