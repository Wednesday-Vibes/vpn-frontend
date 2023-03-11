import { configureStore } from '@reduxjs/toolkit';
import { platformReducer } from './reducers';

export const store = configureStore({
    // store with multiple combined reducers
    reducer: {
        platform: platformReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
