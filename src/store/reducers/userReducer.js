import * as actions from '../actions/userActions';
import userModel from '../../models/user';
import logo from "../../assets/logo.svg";

export const initialState = {
  user: userModel,
  restaurants: [
    {
      id: "falhpaiow1241",
      name: "KFC",
      imgUrl: logo,
      rating: 4,
      description: "KFC's menu has evolved from its legendary Original Recipe pressure fried chicken.",
      city: 'cairo',
      menu: [

        {
          id: 'falhpaiow1241231',
          name: 'Cheese Burger',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 54.00,
          img: null,
          rating: 2,
          size: 0,
          sizes: [`small`, `meduim`, `large`],
          amount: 1
        },
        {
          id: 'falhpaiow12412',
          name: 'Chiken',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 100.00,
          rating: 1,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        }],
      comments: [
        { userId: 121, comment: "I know they are going to be honest with me.", rating: 3, userName: "Israa" },
        { userId: 122, comment: "Hungry is always responsive to any question I have.", rating: 3, userName: "Marwa" },
        { userId: 123, comment: "they keep me informed and they understand who we are and what we’re trying to do.", rating: 3, userName: "Ahmed" },
        { userId: 124, comment: "All communication with them is really easy. They do handle everything.", rating: 3, userName: "Omar" }
      ]
    },
    {
      id: "falhpaiow1242",
      name: "MAC",
      imgUrl: "",
      rating: 3,
      description: "Our menu is simple yet delicious with a variety of \"MACS\" available.",
      city: 'alex',
      menu: [
        {
          id: 'falhpaiow12413',
          name: 'Hambourger',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        },
        {
          id: 'falhpaiow12414',
          name: 'Salad',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        }
      ],
      comments: [
        { userId: 125, comment: "lorem", rating: 3, userName: "Fatma" },
        { userId: 126, comment: "lorem", rating: 3, userName: "Mohamed" },
        { userId: 127, comment: "lorem", rating: 3, userName: "Rana" }
      ]
    },
    {
      id: "falhpaiow1243",
      name: "MAC",
      imgUrl: "",
      rating: 4,
      description: "Our menu is simple yet delicious with a variety of \"MACS\" available.",
      city: 'ismailia',
      menu: [
        {
          id: 'falhpaiow12415',
          name: 'Pizza',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        },
        {
          id: 'falhpaiow12416',
          name: 'cheese',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        }
      ],
      comments: [
        { userId: 128, comment: "lorem", rating: 3, userName: "Nora" },
        { userId: 129, comment: "lorem", rating: 3, userName: "Sara" }
      ]
    },
    {
      id: "falhpaiow1244",
      name: "MAC",
      imgUrl: "",
      rating: 4,
      description: "Everything is freshly made in house and all of our macs can be made gluten free.",
      city: 'ismailia',
      menu: [
        {
          id: 'falhpaiow12417',
          name: 'Ice Cream',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        },
        {
          id: 'falhpaiow12418',
          name: 'Fish',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        }
      ]
    },
    {
      id: "falhpaiow1245",
      name: "KFC",
      imgUrl: "",
      rating: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit",
      city: 'suez',
      menu: [
        {
          id: 'falhpaiow12419',
          name: 'Chiken',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        },
        {
          id: 'falhpaiow124110',
          name: 'meat',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 85.00,
          rating: 4,
          size: 0,
          sizes: [`small`, `meduim`, `large`, `x-large`],
          amount: 1
        }
      ]
    }
  ],
  menus: [

    {
      id: 'falhpaiow1241231',
      name: 'Cheese Burger',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 54.00,
      img: null,
      rating: 2,
      size: 0,
      sizes: [`small`, `meduim`, `large`],
      amount: 1
    },
    {
      id: 'falhpaiow12412',
      name: 'Chiken',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 100.00,
      rating: 1,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    },
    {
      id: 'falhpaiow12413',
      name: 'Hambourger',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 85.00,
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    },
    {
      id: 'falhpaiow12414',
      name: 'Salad',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 85.00,
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    },
    {
      id: 'falhpaiow12415',
      name: 'Pizza',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 85.00,
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    },
    {
      id: 'falhpaiow12416',
      name: 'cheese',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 85.00,
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    },
    {
      id: 'falhpaiow12417',
      name: 'Ice Cream',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 85.00,
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    },
    {
      id: 'falhpaiow12418',
      name: 'Fish',
      discountPrice: 160.00,
      discountPercent: 50,
      price: 85.00,
      rating: 4,
      size: 0,
      sizes: [`small`, `meduim`, `large`, `x-large`],
      amount: 1
    }],
  food: [],
  category: ['meat', 'chicken', 'pizza', 'dirnks'],
  groub: [],
  currentPage: 1,
  pageSize: 5,
  comments: [
    { userId: 121, comment: "I know they are going to be honest with me.", rating: 3, userName: "Israa" },
    { userId: 122, comment: "Hungry is always responsive to any question I have.", rating: 3, userName: "Marwa" },
    { userId: 123, comment: "they keep me informed and they understand who we are and what we’re trying to do.", rating: 3, userName: "Ahmed" },
    { userId: 124, comment: "I am not going to get a subpar product; I know it is going to be good", rating: 3, userName: "Omar" },
    { userId: 125, comment: "All communication with them is really easy. They do handle everything.", rating: 3, userName: "Fatma" },
    { userId: 126, comment: "lorem", rating: 3, userName: "Mohamed" },
    { userId: 127, comment: "lorem", rating: 3, userName: "Rana" },
    { userId: 128, comment: "lorem", rating: 3, userName: "Nora" },
    { userId: 129, comment: "lorem", rating: 3, userName: "Sara" }

  ]

}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_COMMENT:
      let res = state.restaurants.find(r => r.id === action.payload.resid);
      let resCopy = { ...res };
      let comments = [...state.comments]
      let newComment = { userId: Math.random() * 100, comment: action.payload.comment, rating: 3, userName: action.payload.userName };
      resCopy.comments.push(newComment);
      comments.push(newComment)
      res = resCopy;
      return {
        ...state,
        comments
      }
    case action.ERROR:
      break;
    case actions.ADDFOOD:
      let foodCopy = [...state.food];
      let newFood = action.foodData;
      foodCopy.push(newFood);
      return {
        ...state,
        food: foodCopy
      }
    case actions.ADDGROUB:
      let groubCopy = [...state.groub];
      let newGroub = action.groubData;
      groubCopy.push(newGroub);
      return {
        ...state,
        groub: groubCopy
      }
    case actions.CHANGECURRENT:

      return { ...state, currentPage: action.payload };

    default:
      break;
  }
  return {
    ...state,
  };
}

export default userReducer;