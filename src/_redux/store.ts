import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';

import {notifySlice} from './slices';

export const rootReducer = combineReducers({
    notify: notifySlice.reducer,
});

const middlewares = [logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(middlewares);
    },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;