import {SETUSER, UNSETUSER} from '../constants';


export const setuser = (data)=>{
    return{
        type : SETUSER,
        data
    }
}

export const unsetuser = (data)=>{
    return{
        type:UNSETUSER,
        data
    }
}

