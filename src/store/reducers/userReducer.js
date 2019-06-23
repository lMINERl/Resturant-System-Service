import * as actionTypes from "../actions/userActions";
import userModel from "../../models/user";
import token from "../../db/local-storage";

export const initialState = {
  user: userModel,
  isRegistered: false,
  isLogedIn: false,
  token: null,
  currentPage: 0,
  comments: [
    {
      userId: 121,
      comment: "I know they are going to be honest with me.",
      rating: 4,
      userName: "Israa"
    },
    {
      userId: 122,
      comment: "Hungry is always responsive to any question I have.",
      rating: 4,
      userName: "Hatem"
    },
    {
      userId: 123,
      comment:
        "they keep me informed and they understand who we are and what we’re trying to do.",
      rating: 4,
      userName: "Ahmed"
    },
    {
      userId: 124,
      comment:
        "I am not going to get a subpar product; I know it is going to be good",
      rating: 4,
      userName: "Hadeer"
    },
    {
      userId: 125,
      comment:
        "All communication with them is really easy. They do handle everything.",
      rating: 4,
      userName: "Fatma"
    },
    {
      userId: 126,
      comment:
        "Hungry is a very good site , i have many groups with my friends .",
      rating: 4,
      userName: "Medhat"
    }
  ]
};

const userReducer = (state = initialState, action) => {
  let currentUser = { ...state.user };
  let currentPage = state.currentPage;
  let currentToken = state.token;
  let registered = state.isRegistered;
  let logedIn = state.isLogedIn;
  
  switch (action.type) {
    case actionTypes.LOGIN:
      const { user, token: setToken } = { ...action.payload };
      if (user && setToken) {
        token.setToken(setToken);
        currentToken=setToken;
        currentUser=user;
        logedIn = true;
        console.log(currentUser);
      }
      currentUser = user;
      break;
    case actionTypes.REGISTER:
      registered = true;
      break;
    case actionTypes.ADD_COMMENT:
      console.log(action.payload);
      break;

    case actionTypes.ADD_GROUB:
      console.log(action.payload);
      break;

    case actionTypes.CHANGE_CURRENT:
      currentPage = action.payload;
      break;

    case actionTypes.UPDATE_USER:{
      currentUser= {...action.payload};
    }
    case action.ERROR:
      console.error(action.payload);
      break;

    default:
      break;
  }
  return {
    ...state,
    user: currentUser,
    isRegistered: registered,
    token: currentToken,
    isLogedIn: logedIn,
    currentPage: currentPage
  };
};

export default userReducer;
