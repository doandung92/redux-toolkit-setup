import { combineReducers } from "redux";
import counterReducer from "./count";

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;
