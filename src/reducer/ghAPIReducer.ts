import { createSlice } from '@reduxjs/toolkit';

const ghAPIReducer = createSlice({
  name: 'ghAPIReducer',
  initialState: {
    authToken: '',
    refresh: null,
  },
  reducers: {
    setAuthToken(state, { payload: input }) {
      return { ...state, authToken: input };
    },
    setRefresh(state, { payload: input }) {
      return { ...state, refresh: input };
    },
  },
});

export const { setAuthToken, setRefresh } = ghAPIReducer.actions;
export default ghAPIReducer.reducer;
