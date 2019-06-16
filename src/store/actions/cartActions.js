
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';

export const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        payload: cartItem
    }
}
export const deleteFromCart = (cartItem) => {
    return {
        type: DELETE_FROM_CART,
        payload: cartItem
    }
}
export const updateItemUnits = (cartItem) => {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: cartItem
    }
}