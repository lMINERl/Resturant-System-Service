
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';

export function addToCart({id, name, price,size, amount=1}) {
    return {
        type: ADD_TO_CART,
        payload: {id, name, price,size, amount}
    }
}
export function deleteFromCart({id}) {
    return {
        type: DELETE_FROM_CART,
        payload: {id}
    }
}
export function updateItemUnits({id, amount}) {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: {id, amount}
    }
}