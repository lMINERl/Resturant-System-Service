import { foodAPI } from "../../api/foodAPI";

export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const GET_ITEMS = "GET_ITEMS";
export const GET_ITEM_BY_ID = "GET_ITEM_BY_ID";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_RESTAURANT_MENU = "GET_RESTAURANT_MENU";
export const SET_SIZE = "SET_SIZE";
export const SET_AMOUNT = "SET_AMOUNT";
export const SET_RATING = "SET_RATING";
export const ERROR = "ERROR";
export const GET_FILTERED_ITEMS = "GET_FILTERED_ITEMS";

export const getRestaurantMenuDispatch = restaurantId => {
  return dispatch => {
    foodAPI
      .getRestaurantMenu(restaurantId)
      .then(v => {
        const list = v.map(el => {
          return { ...el, amount: 0, size: 0 };
        });
        dispatch(getRestaurantMenu(list));
      })
      .catch(err => dispatch(riseError(err)));
  };
};

export const changePage = pageNumber => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber
  };
};
export const updateItem = newItem => {
  return {
    type: UPDATE_ITEM,
    payload: newItem
  };
};
export const deleteItem = itemId => {
  return {
    type: DELETE_ITEM,
    payload: itemId
  };
};

export const addItem = newItem => {
  return {
    type: ADD_ITEM,
    payload: newItem
  };
};
export const getItems = () => {
  return {
    type: GET_ITEMS,
    payload: null
  };
};
export const getItemById = itemId => {
  return {
    type: GET_ITEM_BY_ID,
    payload: itemId
  };
};
export const getRestaurantMenu = list => {
  return {
    type: GET_RESTAURANT_MENU,
    payload: list
  };
};
export const setSize = (id, size) => {
  return {
    type: SET_SIZE,
    payload: { id, size }
  };
};
export const setAmount = (id, amount) => {
  return {
    type: SET_AMOUNT,
    payload: { id, amount }
  };
};
export const setRating = (id, rating) => {
  return {
    type: SET_RATING,
    payload: { id, rating }
  };
};
export const riseError = msg => {
  return {
    type: ERROR,
    payload: msg
  };
};
export const getFilteredItems = (listOfCategories, property, getAll) => {
  return {
    type: GET_FILTERED_ITEMS,
    payload: { listOfCategories, property, getAll }
  };
};
