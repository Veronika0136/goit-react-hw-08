import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    contact: null,
  },

  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.contact = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.contact = null;
    },
  },
});
export const { openModal, closeModal } = slice.actions;

export default slice.reducer;
