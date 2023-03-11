import { createAction, createReducer } from '@reduxjs/toolkit';

// * write action names as "reducerName/whatHappened" *

/* PLATFORM */
const platformReducerInitialState = {
    value: 0
};

export const platformReducer = createReducer(platformReducerInitialState, (builder) => {
    builder
        .addCase(createAction('platform/counterIncremented'), (state, action) => {
            state.value++;
        })
        .addCase(createAction('platform/counterDecremented'), (state, action) => {
            state.value--;
        })
        .addCase(createAction<number>('platform/counterIncrementedByAmount'), (state, action) => {
            state.value += action.payload;
        });
});
