import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authApi} from './services/authService';
import {imagesApi} from './services/imagesService';
import {usersApi} from './services/usersService';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      usersApi.middleware,
      imagesApi.middleware,
    ]),
});

export default store;
