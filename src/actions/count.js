import { createAction } from "@reduxjs/toolkit";

const countActions = {
  increment: createAction("counter/increment"),
  decrement: createAction("counter/decrement"),
};

export default countActions;
