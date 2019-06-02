import * as actions from './actions/actions';

import userModel from '../models/user';
import logo from "../assets/logo.svg";

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
            menu:[
       
                {
                  id: 'falhpaiow1241231',
                  name: 'Cheese Burger',
                  discountPrice: 160.00,
                  discountPercent: 50,
                  price: 54.00,
                  img:null,
                  rating: 2,
                  size: 'medium',
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
                  size: 'small',
                  sizes: [`small`, `meduim`, `large`, `x-large`],
                  amount: 1
                }]
        },
        {
            id: "falhpaiow1242",
            name: "MAC",
            imgUrl: "",
            rating: 3,
            description: "Our menu is simple yet delicious with a variety of \"MACS\" available.",
            city: 'alex',
            menu:[
                {
                    id: 'falhpaiow12413',
                    name: 'Hambourger',
                    discountPrice: 160.00,
                    discountPercent: 50,
                    price: 85.00,
                    rating: 4,
                    size: 'large',
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
                    size: 'large',
                    sizes: [`small`, `meduim`, `large`, `x-large`],
                    amount: 1
                  }
            ]
        },
        {
            id: "falhpaiow1243",
            name: "MAC",
            imgUrl: "",
            rating: 4,
            description: "Our menu is simple yet delicious with a variety of \"MACS\" available.",
            city: 'ismailia',
            menu:[
                {
                    id: 'falhpaiow12415',
                    name: 'Pizza',
                    discountPrice: 160.00,
                    discountPercent: 50,
                    price: 85.00,
                    rating: 4,
                    size: 'large',
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
                    size: 'large',
                    sizes: [`small`, `meduim`, `large`, `x-large`],
                    amount: 1
                  }
            ]
        },
        {
            id: "falhpaiow1244",
            name: "MAC",
            imgUrl: "",
            rating: 4,
            description: "Everything is freshly made in house and all of our macs can be made gluten free.",
            city: 'ismailia',
            menu:[
                {
                    id: 'falhpaiow12417',
                    name: 'Ice Cream',
                    discountPrice: 160.00,
                    discountPercent: 50,
                    price: 85.00,
                    rating: 4,
                    size: 'large',
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
                    size: 'large',
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
            menu:[
                {
                    id: 'falhpaiow12419',
                    name: 'Chiken',
                    discountPrice: 160.00,
                    discountPercent: 50,
                    price: 85.00,
                    rating: 4,
                    size: 'large',
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
                    size: 'large',
                    sizes: [`small`, `meduim`, `large`, `x-large`],
                    amount: 1
                  }
            ]
        }
    ],
    menus:[
       
        {
          id: 'falhpaiow1241231',
          name: 'Cheese Burger',
          discountPrice: 160.00,
          discountPercent: 50,
          price: 54.00,
          img:null,
          rating: 2,
          size: 'medium',
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
          size: 'small',
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
            size: 'large',
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
            size: 'large',
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
            size: 'large',
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
            size: 'large',
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
            size: 'large',
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
            size: 'large',
            sizes: [`small`, `meduim`, `large`, `x-large`],
            amount: 1
          }],
    food : [],
    category : ['meat' , 'chicken' , 'pizza' , 'dirnks'],
    groub : [] ,
    currentPage : 1 , 
    pageSize : 3

}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case action.ERROR:
            console.log(action.payload);
            break;
            case actions.ADDFOOD:
                let foodCopy = [...state.food];
                let newFood = action.foodData;
                foodCopy.push(newFood);
                console.log(foodCopy)
                return {
                    ...state,
                    food: foodCopy
                }
                break;
                case actions.ADDGROUB:
                    let groubCopy = [...state.groub];
                    let newGroub = action.groubData;
                    groubCopy.push(newGroub);
                    console.log(groubCopy)
                    return {
                        ...state,
                        groub: groubCopy
                    }
                    break; 
                    case actions.CHANGECURRENT:
        
            return {...state, currentPage: action.payload};
            break;
  
        default:
            break;
    }
    return {
        ...state,
    };
}

export default userReducer;