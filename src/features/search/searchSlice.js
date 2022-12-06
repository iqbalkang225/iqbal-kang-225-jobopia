import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getJobs, deleteJob } from "./searchThunks";

const initialState = {
  jobs: [],
  isLoading: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(getJobs.fulfilled, (state, { payload }) => {
        const { jobs } = payload.data
        state.isLoading = false
        state.jobs = jobs
      })
      .addCase(getJobs.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })

      .addCase(deleteJob.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        // const { jobs } = payload.data
        state.isLoading = false
        // state.jobs = jobs
        toast.success('Job deleted')
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  }
})

export default searchSlice.reducer