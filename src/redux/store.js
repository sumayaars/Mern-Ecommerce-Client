
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../redux/features/cartSlice/cartSlice';
import { productsApi } from './api/productsApi/productsApi';

const store= configureStore({

    reducer:{
        cart: cartSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(productsApi.middleware),
})

export default store;