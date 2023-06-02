import { configureStore } from '@reduxjs/toolkit'
import jobSlice from '../features/job/jobSlice'
import searchSlice from '../features/search/searchSlice'
import uiSlice from '../features/ui/uiSlice'
import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    ui: uiSlice,
    job: jobSlice,
    search: searchSlice
  },
})

export default store
