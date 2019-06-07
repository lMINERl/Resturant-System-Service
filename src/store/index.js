import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import auth from "./reducers/auth-reducer";

import foodReducer from './reducers/foodReducer';
import restaurantReducer from "./reducers/restaurantReducer";
import groupsReducer from "./reducers/groupReducer";
import ruleReducer from "./reducers/ruleReducer";
export default combineReducers({
    food: foodReducer,
    restaurant: restaurantReducer,
    group: groupsReducer,
    rule: ruleReducer,
    
    user: userReducer,
    cart: cartReducer,
    auth
});
