import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'appNews',
  initialState: {
    saveValue: '',
    searchValue: '',
    sortValue: 'popularity',
    forms: [],
    searchArr: [],
  },
  reducers: {
    handleChange(state, action) {
      state.saveValue = action.payload;
    },
    handleSubmit(state, action) {
      state.searchValue = action.payload;
    },
    saveInfoApi(state, action) {
      state.searchArr = action.payload;
      console.log(state.searchArr);
    },
    handleSort(state, action) {
      state.sortValue = action.payload;
      console.log(state.sortValue);
    },
  },
});

export const { handleChange, handleSubmit, saveInfoApi, handleSort } = appSlice.actions;

export default appSlice.reducer;
