import { configureStore } from '@reduxjs/toolkit';
import gistsReducer from './gistsSlice';

const store = configureStore({
  reducer: {
    gists: gistsReducer,
  },
});

export default store;