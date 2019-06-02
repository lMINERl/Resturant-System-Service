import { combineReducers } from "redux";
import reducer from "./reducer";
import cartReducer from "./cartReducer";
import auth from "./auth-reducer";
export default combineReducers({
  reducer: reducer,
  cart: cartReducer,
  auth
});
