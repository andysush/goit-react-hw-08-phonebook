import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', {
        name: contact.name,
        number: contact.number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);
