import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { postRequest, URL } from '../../utils/urls';

const initialState = {
  isLoading: false,
  isEditing: false,
  stats: {},
};

export const addJob = createAsyncThunk('job/addJob', async (job, thunkAPI) => {
  const { user } = thunkAPI.getState().user;
  try {
    const response = await postRequest('jobs', job, user.token, 'POST');
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const postEditJob = createAsyncThunk('job/editJob', async (job, thunkAPI) => {
  const { _id: jobID } = job;

  try {
    const token = thunkAPI.getState().user.user.token;
    const response = await postRequest(`jobs/${jobID}`, job, token, 'PATCH');
    const data = await response.json();

    if (!response.ok) throw new Error(response.message);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getStats = createAsyncThunk('job/getStats', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${URL}jobs/stats`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    editJob(state, { payload }) {
      return { ...state, ...payload, isEditing: true };
    },
  },
  extraReducers: (builder) => {
    builder
      // Add a job
      .addCase(addJob.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success('New job added');
      })
      .addCase(addJob.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // Edit a Job
      .addCase(postEditJob.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(postEditJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isEditing = false;
        toast.success('Job updated');
      })
      .addCase(postEditJob.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // Get Stats
      .addCase(getStats.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.data.stats;
        state.apps = payload.data.apps;
      })
      .addCase(getStats.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { editJob } = jobSlice.actions;
export default jobSlice.reducer;
