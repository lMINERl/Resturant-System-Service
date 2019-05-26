import * as actions from './actions/actions';

import userModel from '../models/user';


export const initialState = {
    user: userModel
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            // const data = { ...action.payload };
            break;
        case action.ERROR:
            console.log(action.payload);
            break
        default:
            break;
    }
    return {
        ...state,
    };
}

export default userReducer;