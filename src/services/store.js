import { configureStore } from '@reduxjs/toolkit';

import { articleApi } from './article';

// so we are configuring the store which holds our entire information
// but now we use reducer because we only want specific part of the data not all.
// which is the article api
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});