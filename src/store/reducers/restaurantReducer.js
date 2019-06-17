import * as actions from "../actions/restaurantActions";
// import restaurantModel from '../../models/restaurant';
import findIndex from "../../helpers/findIndex";

const initialState = {
  restaurants: [
    {
      _id: "5cf92b292a79451758f83c1c",
      name: "restaurant1",
      imgUrl: null,
      rating: 4,
      location: "cairo",
      description:
        "KFC's menu has evolved from its legendary Original Recipe pressure fried chicken."
    },
    {
      _id: "5cf92b292a79451758f83c1c2",
      name: "restaurant2",
      imgUrl: null,
      rating: 4,
      location: "casdiasd2",
      description:
        "KFC's menu has evolved from its legendary Original Recipe pressure fried chicken."
    }
  ],
  selectedRestaurant: {
    _id: "5cf92b292a79451758f83c1c",
    name: "restaurant1",
    email: "me@example.com",
    phone: "+201023522342",
    foodids: ["5cf929e62a79451758f83c1b"],
    tags: ["tag1", "tag2"],
    categories: ["category1", "category2"],
    location: "cairo",
    rating: 4,
    comments: [{ userId: "5cf92f1c2a79451758f83c2a", number: 0 }],
    description:
      "KFC's menu has evolved from its legendary Original Recipe pressure fried chicken."
  },
  restaurantMenu: ["5cf929e62a79451758f83c1b"],
  pageSize: 5,
  currentPage: 1
};

const restaurantReducer = (state = initialState, action) => {
  let restaurants = [...state.restaurants];
  let selectedRestaurant = { ...state.selectedRestaurant };
  let pageSize = state.pageSize;
  let currentPage = state.currentPage;
  let restaurantMenu = [...state.restaurantMenu];

  switch (action.type) {
    case actions.ADD_ITEM:
      {
        const data = { ...action.payload };
        restaurants.push(data);
      }
      break;
    case actions.UPDATE_ITEM:
      {
        const updatedItem = { ...action.payload };
        const index = restaurants.findIndex(el => el.__id === updatedItem.__id);
        if (index !== -1) restaurants[index] = updatedItem;
      }
      break;

    case actions.DELETE_ITEM:
      {
        const _id = action.payload;
        const itemIndex = restaurants.findIndex(el => el._id === _id);
        if (itemIndex !== -1) {
          restaurants = [].concat(
            restaurants.slice(0, itemIndex),
            restaurants.slice(itemIndex + 1, restaurants.length)
          );
        }
      }
      break;

    case actions.GET_ITEM_BY_ID:
      {
        const _id = action.payload;
        const itemindex = restaurants.findIndex(el => el._id === _id);
        if (itemindex !== -1) selectedRestaurant = itemindex;
      }
      break;
    case actions.CHANGE_PAGE:
      {
        currentPage = action.payload;
      }
      break;
    case actions.SET_RATING:
      {
        const { id, rating } = { ...action.payload };
        if (rating < 5 && rating > -1) {
          const index = findIndex(restaurants, id);
          if (index !== -1) restaurants[index].rating = rating;
        }
      }
      break;
    case action.ERROR:
      break;
    default:
      break;
  }
  return {
    ...state,
    restaurants: restaurants,
    selectedRestaurant: selectedRestaurant,
    restaurantMenu: restaurantMenu,
    pageSize: pageSize,
    currentPage: currentPage
  };
};

export default restaurantReducer;
