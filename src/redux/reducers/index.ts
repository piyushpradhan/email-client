import { combineReducers } from "@reduxjs/toolkit";
import { emailReducer } from "./emailReducers";

export const rootReducer = combineReducers({
  emailReducer,
});
