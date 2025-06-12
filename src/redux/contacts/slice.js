import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact, updateContact } from './operations';
import { logout } from '../auth/operations';
import toast from 'react-hot-toast';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    editContact: null,
  },

  reducers: {
    setEditContact: (state, action) => {
      state.editContact = action.payload;
    },
  },

  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.loading = false;
        state.error = toast.success('The contact has been removed from your phone book.');
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = toast.success('The contact has been added to your phone book.');
      })

      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.error = null;
      })

      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.editContact = null;
        state.loading = false;
        state.error = toast.success('The contact has been changed.');
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected,
          updateContact.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending,
          updateContact.pending
        ),
        state => {
          state.error = null;
          state.loading = true;
        }
      );
  },
});

export const { setEditContact } = slice.actions;

export default slice.reducer;
