import {SETUSER,UNSETUSER} from '../constants';

const Istate = {
    User_name:'',
    Email:'',
    Token:''
}

export default function talent_setter(state=Istate,action) {
    switch (action.type){

        case SETUSER:
            return{
                User_name:action.data.Name,
                Email: action.data.Email,
                Token:action.data.init_token
            }

        case UNSETUSER:
            return{
                User_name:'',
                Email: '',
                Token:''
            }
        
        default:
            return{
                state
            }

    }
}