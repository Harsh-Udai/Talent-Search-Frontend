import {SETUSER,UNSETUSER,ANIMATE} from '../constants';

const initialState = {
    User_name:'',
    Email:'',
    Token:'',
    animat:true,
    testing:'Value for test'
}

export default function talent_setter(state=initialState,action) {
   
    switch (action.type){
        
        case SETUSER:
            return{
                ...state,
                User_name:action.data.Name,
                Email: action.data.Email,
                Token:action.data.init_token
            }

        case UNSETUSER:
            return{
                ...state,
                User_name:'',
                Email: '',
                Token:''
            }

        case ANIMATE:
            return{
                ...state,
                animat:action.data
            }
        
        default:
            return state

    }
}