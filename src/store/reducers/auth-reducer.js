const initialState = {
    attempting: false,
    isAuth: false,
    profile: {},
    user: {},
    error: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_ATTEMPTING':
            return { ...state, attempting: true, isAuth: false, error: null };
        case 'AUTH_SUCCESS':
            return { ...state, attempting: false, isAuth: true, error: null };
        case 'AUTH_FAILED':
            return { ...state, attempting: false, isAuth: false, error: action.payload }
        case 'PROFILE_FETCHED':
            return { ...state, profile: action.payload }
        case 'USER_LOGGEDOUT':
        return {...state,attempting:false,isAuth:false,profile:{}}
        case 'USER_REGISTER':
        console.log(state.user);
        return {...state,user:action.payload}
        default:
            return state;
    }


}

export default authReducer;