const initialState={
    attempting:false,
    isAuth:false,
    profile:{},
    user:{},
    error:null
}
export default (state=initialState,action)=>{
    switch(action.type){
        case 'AUTH_ATTEMPTING':
            return {...state,attempting:true,isAuth:false,error:null};
        case 'AUTH_SUCCESS':
            return {...state,attempting:false,isAuth:true,error:null};
        case 'AUTH_FAILED':
            return {...state,attempting:false,isAuth:false,error:action.payload}
        case 'PROFILE_FETCHED':
        return {...state,profile:action.payload}
        default:
            return state;
    }


}

