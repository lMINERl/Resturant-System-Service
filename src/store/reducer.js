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
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            city: 'cairo'
        },
        {
            id: "falhpaiow1242",
            name: "MAC",
            imgUrl: "",
            rating: 3,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            city: 'alex'
        },
        {
            id: "falhpaiow1243",
            name: "KFC",
            imgUrl: "",
            rating: 4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            city: 'ismailia'
        },
        {
            id: "falhpaiow1244",
            name: "KFC",
            imgUrl: "",
            rating: 4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            city: 'ismailia'
        },
        {
            id: "falhpaiow1245",
            name: "KFC",
            imgUrl: "",
            rating: 4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            city: 'suez'
        }
    ],
    food : [],
    category : ['meat' , 'chicken' , 'pizza' , 'dirnks'],
    groub : []
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            // const data = { ...action.payload };
            break;
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
        default:
            break;
    }
    return {
        ...state,
    };
}

export default userReducer;