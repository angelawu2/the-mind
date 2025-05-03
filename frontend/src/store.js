import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './slices';
import { inNonProd } from './utils/env';

const store = configureStore({
    reducer: rootReducer,
    devTools: inNonProd(),
});

export default store;
