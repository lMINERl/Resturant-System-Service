import {apiLogin,getProfile,apiSignUp} from '../../api/userAPI';
import AuthHeader from '../../api/setAuthHeader';
const TOKEN_NAME = 'rest_app_token';
export const signIn = requset_data =>{
    return async dispatch=>{
        dispatch({type:'AUTH_ATTEMPTING'});
        try{
            const {data:{token}} = await apiLogin(requset_data);
            AuthHeader(token);
            dispatch(fetchProfile())
            dispatch(success(token));
        }catch(e){
           const {response:{data}}=e;
           dispatch(error(data.error))
        }
    }
}
export const signUp = requset_data =>{
    return async dispatch=>{
        dispatch({type:'AUTH_ATTEMPTING'});
        try{
            const {data} = await apiSignUp(requset_data);
           console.log(data.user);
           dispatch({type:'USER_REGISTER',payload:data.user})
            
        }catch(e){

            //console.error(e.response);
           // dispatch(error(e.response.data.error))
           const {response:{data}}=e;
           dispatch(error(data.error))
        }
    }
}
export const fetchProfile = ()=>{
    return async dispatch=>{
        try{
            const {data:{user}} = await getProfile();
            dispatch({type:'PROFILE_FETCHED',payload:user});
        }catch(e){
            console.error(e)
        }
    }
}
export const logUserOut =()=>{
    localStorage.clear();
    return({type:USER_LOGGEDOUT})
}
const success = (token)=>{
    localStorage.setItem(TOKEN_NAME,token);
    return {type:'AUTH_SUCCESS'};
}
const error=(error)=>{
    return {type:'AUTH_FAILED',payload:error}
}
export const ADDFOOD = 'ADD_FOOD';
export const ADDGROUB = 'ADD_GROUB';
export const CHANGECURRENT = 'CHANGECURRENT';
export const ADD_COMMENT = 'ADD_COMMENT';


export function addComment(resid,comment,rating,userName) {
    return {
        type: ADD_COMMENT,
        payload: {resid,comment,rating,userName}
    }
}

