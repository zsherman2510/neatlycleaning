import { configureStore } from "@reduxjs/toolkit";
import cleanerReducer from "./reducers/cleaner/createCleanerReducer";
import createCustomerReducer from "./reducers/customer/createCustomerReducer";
import userReducer from "./reducers/user/user";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    CreateAccountCleaner: cleanerReducer,
    CreateAccountCustomer: createCustomerReducer,
    User: userReducer,
  },
  // You can add middlewares here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
