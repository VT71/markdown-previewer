import { configureStore } from '@reduxjs/toolkit';
import markdownReducer from '../store/slices/markdownParserSlice';

const store = configureStore({
    reducer: { markdown: markdownReducer },
});

export default store;
