import { combineReducers } from "redux";

import { authentication } from "./authReducer";
import { users } from "./userReducer";
import { alert } from "./alertReduce";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
});

export default rootReducer;
