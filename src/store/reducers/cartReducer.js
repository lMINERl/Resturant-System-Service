import * as actionTypes from '../actions/cartActions';



const initialState = {
    cart: [],
}

export default function cartReducer(state = initialState, action = {}) {
    const newCart = [...state.cart];

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if (action.payload._id && action.payload.amount !== 0) {

                let existingIndex = newCart.findIndex(c => {
                    if (c._id === action.payload._id && c.size === action.payload.size) {
                        return true;
                    }
                    return false;
                });
                if (existingIndex === -1)
                    newCart.push({ ...action.payload });
                else if (action.payload.size === newCart[existingIndex].size)
                    newCart[existingIndex].amount += action.payload.amount;
                else
                    newCart.push({ ...action.payload });
            }
            return { ...state, cart: newCart };


        case actionTypes.UPDATE_ITEM_UNITS:
            if (action.payload._id && action.payload.amount > -1) {
                let index = newCart.findIndex((v, i) => {
                    if (v._id === action.payload._id && v.size === action.payload.size) {
                        return true;
                    }
                    return false;
                });

                if (index !== -1)
                    newCart[index].amount += action.payload.nAmount;
                if (newCart[index].amount < 1) {
                    newCart[index].amount = 1;
                }
            }
            return { ...state, cart: newCart };
        case actionTypes.DELETE_FROM_CART:
            let indexToDel = state.cart.findIndex((v, i) => {
                if (v._id === action.payload._id && v.size === action.payload.size) {
                    return true;
                }
                return false;
            });
            return {
                ...state,
                cart: [...newCart.slice(0, indexToDel), ...newCart.slice(indexToDel + 1)]
            };

        default:
            return {
                ...state,
                cart: newCart
            }
    }
}