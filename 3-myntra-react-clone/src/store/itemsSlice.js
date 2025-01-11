import {createSlice} from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) =>{
      // state = action.payload;
      return action.payload; // We can directly return action.payload here also//
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;