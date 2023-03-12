import {createSlice} from '@reduxjs/toolkit';

export const catSlice = createSlice({
  name: 'commonSlice',
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: state => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getCatsFetch, getCatsSuccess, getCatFailure} = catSlice.actions;

export default catSlice.reducer;
