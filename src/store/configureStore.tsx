// src/store.ts

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import coffeeReducer from "../reducers/coffeeReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import coffeeReducer from '../reducers/coffeeReducer';

// const store = configureStore({
//   reducer: {
//     coffee: coffeeReducer,
//   },
// });

// export default store;
