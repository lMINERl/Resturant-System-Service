export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_RESTAURANT_BY_ID = 'GET_RESTAURANT_BY_ID';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_RATING = 'SET_RATING';
export const GET_RESTAURANTS_BYNAME = 'GET_RESTAURANTS_BYNAME';
export const SORT_RESTAURANTS = 'SORT_RESTAURANTS';

// export const getItemByIdDispatch = id => {
//     return dispatch =>
//       restaurantAPI.getById(id).then(
//         v => {
//             const item = v;
//             dispatch(getItemById(item));
//         }
//       )
//   };


export const setRating = (id, rating) => {
    return {
        type: SET_RATING,
        payload: { id, rating }
    }
}
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
export const getRestaurantById = (itemId) => {
    return {
        type: GET_RESTAURANT_BY_ID,
        payload: itemId
    }
}
export const getRestaurantsByname = (restaurantName) => {
    return {
        type: GET_RESTAURANTS_BYNAME,
        payload: restaurantName
    }
}
export const sortRestaurants = (sortMethod, data) => {
    return {
        type: SORT_RESTAURANTS,
        payload:
        {
            isAsc: (sortMethod || 0),
            property: data
        }
    }
}
