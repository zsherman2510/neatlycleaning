import { configureStore } from '@reduxjs/toolkit';
import cleanerReducer from './reducers/cleanerReducer';
import createCustomerReducer from './reducers/createCustomerReducer';
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    CreateAccountCleaner: cleanerReducer,
    CreateAccountCustomer: createCustomerReducer,

  },
  // You can add middlewares here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
