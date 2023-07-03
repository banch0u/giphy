import { createSlice } from '@reduxjs/toolkit';

const initialTestState = { counter: 0 };

const testSlice = createSlice({
  name: 'test',
  initialState: initialTestState,
  reducers: {
    increment(state) {
      state.counter++;
    },
  },
});


export const testActions = testSlice.actions;

export default testSlice.reducer;