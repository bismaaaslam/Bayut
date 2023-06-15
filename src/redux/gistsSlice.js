import { createSlice } from '@reduxjs/toolkit';
import {octokit} from '../services/gistService';


const gistsSlice = createSlice({
  name: 'gists',
  initialState: {
    gists: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchGistsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGistsSuccess(state, action) {
      state.gists = action.payload;
      state.loading = false;
    },
    fetchGistsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchGistsStart, fetchGistsSuccess, fetchGistsFailure } = gistsSlice.actions;

export const searchGists = (username) => async (dispatch) => {
  try {
    dispatch(fetchGistsStart());
    const response = await octokit.gists.listForUser({ username });
    dispatch(fetchGistsSuccess(response.data));
  } catch (error) {
    dispatch(fetchGistsFailure(error.message));
  }
};

export default gistsSlice.reducer;