export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_GROUP = 'ADD_GROUP';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_GROUP_BY_ID = 'GET_GROUP_BY_ID';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const ADD_RESTAURANT_TO_GROUP = 'ADD_RESTAURANT_TO_GROUP';

export const changePage = (pageNumber) => {
    return {
        type: CHANGE_PAGE,
        payload: pageNumber
    }
}
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
        type: ADD_GROUP,
        payload: newItem
    }
}
export const getItems = () => {
    return {
        type: GET_ITEMS,
        payload: null
    }
}
export const getGroupById = (groupId) => {
    return {
        type: GET_GROUP_BY_ID,
        payload: groupId
    }
}
export const addRestaurantToGroup = (restaurant) => {
    return {
        type: ADD_RESTAURANT_TO_GROUP,
        payload: restaurant
    }
}