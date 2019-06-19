export const GET_CATEGORIES = "GET_CATEGORIES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";
export const ADD_CHECKED_CATEGORY="ADD_CHECKED_CATEGORY";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: null
  };
};
export const getCategoryById = itemId => {
  return {
    type: GET_CATEGORY_BY_ID,
    payload: itemId
  };
};
export const updateCategory = newItem => {
  return {
    type: UPDATE_CATEGORY,
    payload: newItem
  };
};
export const deleteCategory = itemId => {
  return {
    type: DELETE_CATEGORY,
    payload: itemId
  };
};
export const addCategory = newItem => {
  return {
    type: ADD_CATEGORY,
    payload: newItem
  };
};
export const addCheckedCategory= (item,isChecked)=>{
  return{
    type:ADD_CHECKED_CATEGORY,
    payload:{item,isChecked}
  }
}