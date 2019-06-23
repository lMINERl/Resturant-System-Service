import * as actions from "../actions/categoryActions";

const initialState = {
  categories: [
    {
      _id: "5cf92b292a79451758f83c1s",
      name: ""
    },
    {
      _id: "5cf92b292a79451758f83c1s1",
      name: "Pizza"
    },
    {
      _id: "5cf92b292a79451758f83c1s2",
      name: "Sandwiches"
    },
    {
      _id: "5cf92b292a79451758f83c1s3",
      name: "Fast Food"
    },
    {
      _id: "5cf92b292a79451758f83c1s4",
      name: "Pasta"
    }
  ],
  checkedItems: new Map()
};

const categoryReducer = (state = initialState, action) => {
  let categorieslist = [...state.categories];
  let checkedItems = state.checkedItems;
  switch (action.type) {
    case actions.GET_CATEGORY_BY_ID:
      break;
    case actions.ADD_CHECKED_CATEGORY:
      break;
    default:
      break;
  }
  return {
    ...state,
    categories: categorieslist,
    checkedItems: checkedItems
  };
};

export default categoryReducer;
