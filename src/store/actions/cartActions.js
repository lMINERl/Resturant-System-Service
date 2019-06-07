
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';

export const addToCart = ({ _id, name, price, size, amount = 1 }) => {
    return {
        type: ADD_TO_CART,
        payload: { _id, name, price, size, amount }
    }
}
export const deleteFromCart = ( _id ) => {
    return {
        type: DELETE_FROM_CART,
        payload: { _id }
    }
}
export const updateItemUnits = ( _id, amount ) => {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: { _id, amount }
    }
}