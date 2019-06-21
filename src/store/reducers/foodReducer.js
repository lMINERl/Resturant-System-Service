import * as actions from "../actions/foodActions";
import findIndex from "../../helpers/findIndex";

const initialState = {
  foods: [
    {
      _id: "5cf929e62a79451758f83c1b",
      name: "category1",
      discountPrice: 50,
      price: [100.0, 200, 300, 400],
      img: null,
      category: "category1",
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    },
    {
      _id: "5cf929e62a79451758f83c1b2",
      name: "category2",
      discountPrice: 50,
      price: [100.0, 200, 300, 400],
      img: null,
      category: "category2",
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    },
    {
      _id: "5cf929e62a79451758f83c1b3",
      name: "category1",
      discountPrice: 51,
      price: [100.0, 200, 300, 400],
      img: null,
      category: "category1",
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    },
    {
      _id: "5cf929e62a79451758f83c1b4",
      name: "category2",
      discountPrice: 50,
      price: [100.0, 200, 300, 400],
      img: null,
      category: "category2",
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    },
    {
      _id: "5cf929e62a79451758f83c1b5",
      name: "category3",
      discountPrice: 53.0,
      price: [100.0, 200, 300, 400],
      img: null,
      category: "category3",
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    },
    {
      _id: "5cf929e62a79451758f83c1d",
      name: "Pizza",
      discountPrice: 60.0,
      price: [44.0, 100, 300, 400],
      img: null,
      rating: 3,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    },
    {
      _id: "5cf929e62a79451758f83c1c",
      name: "Chicken",
      discountPrice: 40.0,
      price: [80, 120, 160, 200],
      img: null,
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 0
    }
  ],
  selectedFood: {
    _id: "5cf929e62a79451758f83c1b",
    name: "Fish",
    discountPrice: 160.0,
    discountPercent: 50,
    price: [85.0,100,200,300,550],
    category: "category1",
    rating: 4,
    size: 0,
    sizes: [`small`, `meduim`, `large`, `x-large`],
    amount: 0,
    comments: [{ userId: "5cf92f1c2a79451758f83c2a", number: 0 }],
    ingredients: [`a`, `b`, `c`],
    tags: [`tag1`, `tag2`]
  },
  currentPage: 1,
  pageSize: 5,
  filteredlist: []
};

const foodReducer = (state = initialState, action) => {
  let nfoods = [...state.foods];
  let nselectedFood = { ...state.selectedFood };
  let ncurrentPage = state.currentPage;
  let npageSize = state.pageSize;
  let filteredlist = [...state.filteredlist];
  switch (action.type) {
    case actions.ADD_ITEM:
      {
        const data = { ...action.payload };

        nfoods.push(data);
      }
      break;

    case actions.UPDATE_ITEM:
      {
        const updatedItem = { ...action.payload };
        const index = findIndex(nfoods, updatedItem._id);
        if (index !== -1) nfoods[index] = updatedItem;
      }

      break;

    case actions.DELETE_ITEM:
      {
        const _id = action.payload;
        const itemIndex = nfoods.findIndex(el => el._id === _id);
        if (itemIndex !== -1) {
          nfoods = [].concat(
            nfoods.slice(0, itemIndex),
            nfoods.slice(itemIndex + 1, nfoods.length)
          );
        }
      }

      break;

    case actions.GET_ITEM_BY_ID:
      {
        const _id = action.payload;
        const itemindex = findIndex(nfoods, _id);
        if (itemindex !== -1) nselectedFood = { ...nfoods[itemindex] };
      }
      break;
    case actions.GET_RESTAURANT_MENU:
      // nfoods = [...action.payload]; is this a must if you use dispach the return is a list of foods
      filteredlist = [...nfoods];
      break;

    case actions.CHANGE_PAGE:
      ncurrentPage = action.payload;
      break;

    case actions.SET_SIZE:
      {
        const { id, size } = { ...action.payload };
        const index = findIndex(nfoods, id);
        if (index !== -1) {
          if (size < nfoods[index].sizes.length && size > -1) {
            nfoods[index].size = size;
          }
        }
      }
      break;

    case actions.SET_AMOUNT:
      {
        const { id, amount } = { ...action.payload };
        if (amount < 10 && amount > -1) {
          const index = findIndex(nfoods, id);

          if (index !== -1) {
            nfoods[index].amount = amount;
          }
        }
      }
      break;
    case actions.SET_RATING:
      {
        const { id, rating } = { ...action.payload };
        if (rating < 10 && rating > -1) {
          const index = findIndex(nfoods, id);

          if (index !== -1) nfoods[index].rating = rating;
        }
      }
      break;
    case actions.GET_FILTERED_ITEMS:
      {
        const getAll = action.payload.getAll;
        const listOfCategories = [...action.payload.listOfCategories];
        if (!getAll && listOfCategories.length) {
          const property = action.payload.property;

          // const checker = obj => obj[property].startsWith(propertyValue);
          filteredlist = filteredlist.filter(v =>
            listOfCategories.includes(v[property])
          );
        } else {
          filteredlist = [...nfoods];
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
    foods: nfoods,
    selectedFood: nselectedFood,
    pageSize: npageSize,
    currentPage: ncurrentPage,
    filteredlist: filteredlist
  };
};

export default foodReducer;
