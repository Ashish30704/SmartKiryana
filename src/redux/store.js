import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './slices/mainSlice';
import dataReducer from './slices/dataSlice';

const store = configureStore({
    reducer: {
        main: mainReducer,
        data: dataReducer,
    }
})

export default store;