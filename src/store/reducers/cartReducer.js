import findIndex from '../../helpers/findIndex';
import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS} from '../actions/cartActions';


export default function cartReducer(state=[], action={}) {
    switch(action.type) {
        case ADD_TO_CART:
            let existingIndex = findIndex(state, action.payload._id);
            
            if (existingIndex !== -1) {
                state[existingIndex].amount += 1;
                return state.concat([]);
            }
           
            return state.concat(action.payload);
            

        case UPDATE_ITEM_UNITS:
            let existingItemIndex = findIndex(state, action.payload._id);
            if (state[existingItemIndex].amount === 0 && action.payload.amount === -1) {
                break;
            }
            state[existingItemIndex].amount += action.payload.amount;
            return state.concat([]);

        case DELETE_FROM_CART:
            let indexToDel = findIndex(state, action.payload._id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
            default:
            return state
    }

    
   
    return state;
}