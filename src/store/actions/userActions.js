import { userAPI } from "../../api/userAPI";

export const TOKEN_NAME = "token";
export const ADD_GROUB = "ADD_GROUB";
export const CHANGE_CURRENT = "CHANGECURRENT";
export const ADD_COMMENT = "ADD_COMMENT";

export const LOGIN = "LOGIN";
export const ERROR = "ERROR";
export const REGISTER = "REGISTER";
export const UPDATE_USER = "UPDATE_USER";

export const loginDispatch = requset_data => {
  return dispatch => {
    userAPI
      .login(requset_data)
      .then(v => {
        dispatch(loginUser(v.data));
      })
      .catch(err => dispatch(riseError(err)));
  };
};

export const registerDispatch = requset_data => {
  return dispatch => {
    userAPI
      .register(requset_data)
      .then(v => {
        dispatch(registerUser(v.data));
      })
      .catch(err => dispatch(riseError(err)));
  };
};


export const updateUserDispatch = (requset_data,token) => {
  return dispatch => {
    userAPI
      .editProfile(requset_data,token)
      .then(v => {
        debugger;
        dispatch(updateUser(v.data));
      })
      .catch(err => dispatch(riseError(err)));
  };
};

// export const fetchProfile = () => {
//   debugger;
//   return async dispatch => {
//     try {
//       const {
//         data: { user }
//       } = await getProfile();
//       dispatch({ type: "PROFILE_FETCHED", payload: user });
//     } catch (e) {
//       console.error(e);
//     }
//   };
// };

export function addComment(resid, comment, rating, userName) {
  return {
    type: ADD_COMMENT,
    payload: { resid, comment, rating, userName }
  };
}

export const loginUser = responseData => {
  return { type: LOGIN, payload: responseData };
};
export const riseError = msg => {
  return { type: ERROR, payload: msg };
};
export const registerUser = responseData => {
  return { type: REGISTER, payload: responseData };
};
export const updateUser = currentUser => {
  return { type: UPDATE_USER, payload: currentUser }
}