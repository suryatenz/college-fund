import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
  token: null,
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },    
    setMail: (state, action) => {
      state.email = action.payload;
    },
    clearMail: (state) => {
      state.email = '';  
    },
  }
});

export const { setToken, clearToken, setMail, clearMail } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectMail = (state) => state.auth.email;

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedReducer;
