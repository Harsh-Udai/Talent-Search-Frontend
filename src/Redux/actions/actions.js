import {SETUSER, UNSETUSER,ANIMATE} from '../constants';


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

export const setAnimat = (data)=>{
    return{
        type:ANIMATE,
        data
    }
}

