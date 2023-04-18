import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userData";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

// import userReducer from './userData';

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
