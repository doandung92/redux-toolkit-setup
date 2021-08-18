import { createReducer } from "@reduxjs/toolkit";

const counterReducer = createReducer(0, {
  "counter/increment": (state, action) => state + action.payload,
  "counter/decrement": (state, action) => state - action.payload,
});

export default counterReducer
