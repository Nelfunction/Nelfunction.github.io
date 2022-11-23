import { createSlice } from '@reduxjs/toolkit';

const ghAPIReducer = createSlice({
  name: 'ghAPIReducer',
  initialState: {
    authToken: '',
  },
  reducers: {
    setAuthToken(state, { payload: input }) {
      return { ...state, authToken: input };
    },
  },
});

export const { setAuthToken } = ghAPIReducer.actions;
export default ghAPIReducer.reducer;
