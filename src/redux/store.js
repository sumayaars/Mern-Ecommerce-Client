
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../redux/features/cartSlice/cartSlice';
import { productsApi } from './api/productsApi/productsApi';
import { usersApi } from './api/UsersApi/UsersApi';

const store= configureStore({

    reducer:{
        cart: cartSlice,
        [productsApi.reducerPath]: productsApi.reducer,
         [usersApi.reducerPath]: usersApi.reducer,
    },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
})

export default store;