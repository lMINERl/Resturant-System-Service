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
    ]
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            // const data = { ...action.payload };
            break;
        case action.ERROR:
            console.log(action.payload);
            break
        default:
            break;
    }
    return {
        ...state,
    };
}

export default userReducer;