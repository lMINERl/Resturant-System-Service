import * as actions from "../actions/foodActions";
import findIndex from "../../helpers/findIndex";

const initialState = {
  foods: [
    {
      _id: "5cf929e62a79451758f83c1b",
      name: "Super Dinner",
      restaurantId:"5cf92b292a79451758f83c1c2",
      discountPrice: 160.0,
      isSale: true,
      discountPercent: 50,
      price: [55],
      img: null,
      category: "Fast Food",
      rating: 4,
      size: 0,
      sizes: [`small`],
      amount: 0,
      description:"4 Pieces of chicken, 1 small French fries, 1 small coleslaw salad and a bun"
    },
    {
      _id: "5cf929e62a79451758f83c1b2",
      name: "Dinner Box",
      restaurantId:"5cf92b292a79451758f83c1c2",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [50.0, 70, 100],
      img: null,
      category: "Fast Food",
      rating: 3,
      size: 0,
      sizes: [`small`, `meduim`, `large`],
      amount: 0,
      description:"3 Pieces fried chicken, served with small French fries, coleslaw salad and bun"
    },
    {
      _id: "5cf929e62a79451758f83c1b3",
      name: "Toasted Twister",
      restaurantId:"5cf92b292a79451758f83c1c2",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [50.0, 70],
      img: null,
      category: "Sandwiches",
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`],
      amount: 0,
      description:"2 Pieces crispy chicken, tomatoes, lettuce, pepper and mayonnaise sauce, served in tostada                    tortilla bread"
    },
    {
      _id: "5cf929e62a79451758f83c1b4",
      name: "Shrimp Meal",
      restaurantId:"5cf92b292a79451758f83c1c2",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [70.0, 100],
      img: null,
      category: "Sandwiches",
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`],
      amount: 0,
      description:"7 Pieces of shrimp, large plain rice, small French fries, small coleslaw salad, dynamite sauce,                 cocktail sauce and 1 piece of bread"
    },
    {
      _id: "5cf929e62a79451758f83c1b5",
      name: "Sharing Box",
      restaurantId:"5cf92b292a79451758f83c1c3",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [105],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/Untitled-4_636878244585553759.jpg?           width=68&height=60",
      category: "Sandwiches",
      rating: 4,
      size: 0,
      sizes: [`large`],
      amount: 0,
      description:"Pick 2 sandwiches from Big Mac (Beef/Chicken) and McChicken + 2 sandwiches from Beef Burger,                   Cheeseburger and Chicken MacDo + 2 regular Fries + 1 liter Coke"
    },
    {
      _id: "5cf929e62a79451758f83c1b6",
      name: "Grand Share Box",
      restaurantId:"5cf92b292a79451758f83c1c3",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [150],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/Untitled-5_636878244883782758.jpg?            width=68&height=60",
      category: "Sandwiches",
      rating: 4,
      size: 0,
      sizes: [`large`],
      amount: 0,
      description:"Pick 2 sandwiches from Big Mac (Beef/Chicken) and McChicken + 2 sandwiches from Beef Burger,                   Cheeseburger and Chicken MacDo + 2 regular Fries + 1 liter Coke"
    },
    {
     _id: "5cf929e62a79451758f83c1b7",
      name: "Chicken McNuggets",
      restaurantId:"5cf92b292a79451758f83c1c3",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [90],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/Untitled-40_636878270217751268.jpg?                       width=68&height=60",
     category: "Fast Food",
      rating: 3,
      size: 0,
      sizes: [`large`],
      amount: 0,
      description:"How can you resist them? They're such crispy lil critters made of succulent, white chicken. + 2                    regular Fries + 1 liter Coke"
    },
    {
     _id: "5cf929e62a79451758f83c1b8",
      name: "Chicken Legend Pizza",
      restaurantId:"5cf92b292a79451758f83c1c4",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [50,65],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/11861186063_1532871418_ma.jpg?width=68&height=60",
      category: "Pizza",
      rating: 4,
      size: 0,
      sizes: [`meduim`,`large`],
      amount: 0,
      description:"Slices of grilled chicken, onions, mozzarella cheese, American cheese and your choice of sauce"
    },
    {
     _id: "5cf929e62a79451758f83c1b9",
      name: "Meatzza Pizza",
      restaurantId:"5cf92b292a79451758f83c1c4",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [50,65],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/11861186063_1532871418_ma.jpg?width=68&height=60",
      category: "Pizza",
      rating: 4,
      size: 0,
      sizes: [`meduim`,`large`],
      amount: 0,
      description:"Beef pepperoni, Italian sausage, beef and mozzarella cheese"
    },
    {
     _id: "5cf929e62a79451758f83c1b10",
      name: "Superb Cheese Pizza",
      restaurantId:"5cf92b292a79451758f83c1c4",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [35,50],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/11851185898_1531222551_ma.png?width=68&height=60",
      category: "Pizza",
      rating: 4,
      size: 0,
      sizes: [`meduim`,`large`],
      amount: 0,
      description:"Rich layer of Mozzarella cheese"
    },
    {
     _id: "5cf929e62a79451758f83c1b11",
      name: "Spaghetti Neapolitan",
      restaurantId:"5cf92b292a79451758f83c1c5",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [30,40],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/957957711_1521485555_ma.png?width=68&height=60",
      category: "Pasta",
      rating: 3,
      size: 0,
      sizes: [`small`,`meduim`],
      amount: 0,
      description:"Pasta, peppers, zucchini and eggplant"
    },
    {
     _id: "5cf929e62a79451758f83c1b12",
      name: "Spicy Penne Arrabbiata",
      restaurantId:"5cf92b292a79451758f83c1c5",
      discountPrice: 0,
      isSale: false,
      discountPercent: 0,
      price: [55],
      img: "https://images.deliveryhero.io/image/otlob/MenuItems/957957711_1521485555_ma.png?width=68&height=60",
      category: "Pasta",
      rating: 4,
      size: 0,
      sizes: [`meduim`],
      amount: 0,
      description:"Pasta, peppers, beef and mozzarella cheese"
    }
  ],
  selectedFood:{},
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
        console.log(nfoods)
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
