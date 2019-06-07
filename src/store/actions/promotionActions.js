export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM_BY_ID = 'GET_ITEM_BY_ID';

export const updateItem = (newItem) => {
    return {
        type: UPDATE_ITEM,
        payload: newItem
    }
}
export const deleteItem = (itemId) => {
    return {
        type: DELETE_ITEM,
        payload: itemId
    }
}

export const addItem = (newItem) => {
    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

export const getItems = () => {
    return {
        type: GET_ITEMS,
        payload: null
    }
}

export const getItemById = (itemId) => {
    return {
        type: GET_ITEM_BY_ID,
        payload: itemId
    }
}