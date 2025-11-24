import { configureStore } from "@reduxjs/toolkit";
import adminReducer from '../features/gallery/gallerySlice'

export const store = configureStore({
        reducer: {
        admin: adminReducer,
        },
});

export default store;