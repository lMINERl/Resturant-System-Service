import * as actions from "../actions/restaurantActions";
// import restaurantModel from '../../models/restaurant';
import findIndex from "../../helpers/findIndex";

const initialState = {
  restaurants: [
    {
      _id: "5cf92b292a79451758f83c1c",
      name: "MAC",
      imgUrl: null,
      rating: 4,
      location: "cairo",
      description:
        'Our menu is simple yet delicious with a variety of "MACS" available.'
    },
    {
      _id: "5cf92b292a79451758f83c1c2",
      name: "KFC",
      imgUrl: null,
      rating: 2,
      location: "ismailia",
      description:
        "KFC's menu has evolved from its legendary Original Recipe pressure fried chicken."
    },
    {
      _id: "5cf92b292a79451758f83c1c3",
      name: "MAC",
      imgUrl: null,
      rating: 3,
      location: "suez",
      description:
        'Our menu is simple yet delicious with a variety of "MACS" available.'
    },
    {
      _id: "5cf92b292a79451758f83c1c4",
      name: "Cook Door",
      imgUrl: null,
      rating: 2,
      location: "alex",
      description: "Our menu is simple yet delicious."
    },
    {
      _id: "5cf92b292a79451758f83c1c5",
      name: "Pizza Hut",
      imgUrl: null,
      rating: 1,
      location: "alex",
      description: "Our menu is simple yet delicious."
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
  currentPage: 1,
  filteredRestaurants: null
};

const restaurantReducer = (state = initialState, action) => {
  let restaurants = [...state.restaurants];
  let selectedRestaurant = { ...state.selectedRestaurant };
  let pageSize = state.pageSize;
  let currentPage = state.currentPage;
  let restaurantMenu = [...state.restaurantMenu];
  let filteredRestaurants = null;
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
        const index = restaurants.findIndex(el => el._id === updatedItem._id);
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
         debugger;
        if (itemindex !== -1) selectedRestaurant = {...restaurants[itemindex]};
      }
      break;
    case actions.CHANGE_PAGE:
      currentPage = action.payload;
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
    case actions.GET_RESTAURANTS_BYNAME:
      {
        const userInput = action.payload;
        filteredRestaurants = restaurants.filter(r =>
          r.name.toLowerCase().startsWith(userInput.toLowerCase())
        );
      }
      break;
    case actions.SORT_RESTAURANTS:
      {
        const { isAsc, property } = action.payload;
        const checker = isAsc
          ? (a, b) => a[property] > b[property]
          : (a, b) => a[property] < b[property];
        if (!filteredRestaurants) filteredRestaurants = [...restaurants];

        filteredRestaurants = filteredRestaurants.sort(checker);
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
    currentPage: currentPage,
    filteredRestaurants: filteredRestaurants
  };
};

export default restaurantReducer;
