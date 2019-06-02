
import {apiLogin,getProfile} from '../../api/userAPI';
import AuthHeader from '../../api/setAuthHeader';
const TOKEN_NAME = 'rest_app_token';
export const signIn = requset_data =>{
    return async dispatch=>{
        dispatch({type:'AUTH_ATTEMPTING'});
        try{
            const {data:{token}} = await apiLogin(requset_data);
            console.log(token);
            AuthHeader(token);
            dispatch(fetchProfile())
            dispatch(success(token));
        }catch(e){
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