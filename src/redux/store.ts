import { configureStore } from '@reduxjs/toolkit';
import cleanerReducer from './reducers/cleanerReducer';
import customerReducer from './reducers/customerReducer';
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    cleaner: cleanerReducer,
    customer: customerReducer,

  },
  // You can add middlewares here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
