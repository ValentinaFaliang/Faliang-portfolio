import {configureStore} from '@reduxjs/toolkit';
import randomizerReducer from '../features/randomizer/randomizer';
import modalStatusReducer from '../features/modalStatus/modalStatus';
import feedbackReducer from '../features/feedback/feedback';

export const store = configureStore({
    reducer: {
        randomizer: randomizerReducer,
        modalStatus: modalStatusReducer,
        feedback: feedbackReducer
    }
});