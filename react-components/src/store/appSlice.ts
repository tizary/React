import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormCard } from '../components/Form/Form';

const appSlice = createSlice({
  name: 'appNews',
  initialState: {
    saveValue: '',
    searchValue: 'all',
    sortValue: 'popularity',
    searchArr: [],
    formsArr: [] as FormCard[],
    formValidation: false,
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
    },
    handleSort(state, action) {
      state.sortValue = action.payload;
    },
    submitForm(state, action: PayloadAction<FormCard>) {
      state.formsArr.push(action.payload);
    },
    changeValidation(state, action: PayloadAction<boolean>) {
      state.formValidation = action.payload;
    },
  },
});

export const { handleChange, handleSubmit, saveInfoApi, handleSort, submitForm, changeValidation } =
  appSlice.actions;

export default appSlice.reducer;
