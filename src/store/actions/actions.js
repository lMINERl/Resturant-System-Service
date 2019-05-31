import userApi from '../../api/userAPI';
// import { initialState } from '../reducer';

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
export const ADDFOOD = 'ADD_FOOD';
export const ADDGROUB = 'ADD_GROUB';



export const addDispatch = (arg) => {

    const { value } = arg;

    return dispatch => {
        userApi.login(value)
            .then(
                v => {
                    dispatch(loginUser({ _id: v.data._id, ...value }));
                }
            )
            .catch(err => dispatch(riseError(err)));
    }
}


export const loginUser = (user) => {
    return { type: LOGIN, payload: user };
}

export const riseError = (msg) => {
    return { type: ERROR, payload: msg }
}
