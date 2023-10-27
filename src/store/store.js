import {configureStore} from '@reduxjs/toolkit';
import randomizerReducer from '../features/randomizer/randomizer';

export const store = configureStore({
    reducer: {
        randomizer: randomizerReducer,
    }
});