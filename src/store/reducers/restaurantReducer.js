import * as actions from "../actions/restaurantActions";
// import restaurantModel from '../../models/restaurant';
import findIndex from "../../helpers/findIndex";

const initialState = {
  restaurants: [
    {
      _id: "5cf92b292a79451758f83c1c2",
      userId: "5d0b9afc7a25e228e0f4032a",
      name: "KFC",
      imgUrl:
        "https://images.deliveryhero.io/image/otlob/restaurants/e5bi_sqp.jpg?v=20150909144409?size=120",
      rating: 4,
      location: "ismailia",
      categories: ["Sandwiches", "Fast Food"],
      description:
        "Enjoy Free Delivery with KFC Egypt. Fast Delivery chain by number of locations in the world"
    },
    {
      _id: "5cf92b292a79451758f83c1c3",
      userId: "5d0b9afc7a25e228e0f4032a",
      name: "McDonald's",
      imgUrl:
        "https://images.deliveryhero.io/image/otlob/restaurants/mac_636878411090902333.jpg?size=120",
      rating: 5,
      location: "ismailia",
      categories: ["Sandwiches", "Fast Food"],
      description: `McDonald's is the second-largest fast food restaurant chain by number of locations in the world .`
    },
    {
      _id: "5cf92b292a79451758f83c1c4",
      userId: "5d0b9afc7a25e228e0f4032a",
      name: `Domino's Pizza`,
      imgUrl:
        "https://images.deliveryhero.io/image/otlob/restaurants/e3zx_sqp.jpg?v=20180731170850?size=120",
      rating: 3,
      location: "ismailia",
      categories: ["Pizza"],
      description:
        "Domino's Pizza is a restaurant located in Egypt, serving a selection of Pizza that delivers across.Choose your favorite pizzas."
    },
    {
      _id: "5cf92b292a79451758f83c1c5",
      userId: "5d0d0802fc822a301c4c9148",
      name: "Matbakh Al Kabsa",
      imgUrl:
        "https://images.deliveryhero.io/image/otlob/restaurants/e2bu_sqp.PNG?v=20180319205535",
      rating: 2,
      location: "cairo",
      categories: ["Pasta"],
      description:
        "The Matbakh Al Kabsa menu is available online in Hangry. Order now your Matbakh Al Kabsa meal.                     ✓Fast ✓Easy ✓Promotions ✓Reviews | Hangry."
    },
    {
      _id: "5cf92b292a79451758f83c1c6",
      userId: "5d0d0802fc822a301c4c9148",
      name: "Buffalo Burger",
      imgUrl:
        "https://images.deliveryhero.io/image/otlob/restaurants/n4wq_sqp.jpg?v=20180502100826?size=120",
      rating: 4,
      location: "cairo",
      categories: ["Fast Food"],
      description: `Buffalo Burger uses high-quality raw ingredients, classic-cooking, “fire-grilled burgers”                    methods, clean environments and distinctive`
    }
  ],
  selectedRestaurant: {},
  restaurantMenu: ["5cf929e62a79451758f83c1b"], //not sure i'm not found function for it
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

    case actions.GET_RESTAURANT_BY_ID:
      {
        const _id = action.payload;
        const itemindex = restaurants.findIndex(el => el._id === _id);
        if (itemindex !== -1)
          selectedRestaurant = { ...restaurants[itemindex] };
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
          if (index !== -1) {
            restaurants[index].rating = rating;
            filteredRestaurants = [...restaurants];
          }
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
