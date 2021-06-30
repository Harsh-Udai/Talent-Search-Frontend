import React from 'react';
import Animation from './Animation';
import Dash from '../Containers/DashboardContainer';
import {Redirect} from 'react-router-dom';

export default function Entry(props) {
    const decode=(arrf)=>{
        let s= '';
        for (let i=0;i<arrf.length;i++){
            s+=(String.fromCharCode(arrf[i]))
        }
        return s;
    }
    if(props.main.talent_setter.Email===''){
        const hmm1 = JSON.parse(sessionStorage.getItem('!@#$%^&*()_+'));
        
        if(hmm1!==null){
            const kk = {Name:decode(hmm1.milestone),init_token:hmm1.milestone1,Email:decode(hmm1.milestone2)}
            // console.log(kk)
            props.setuser(kk)
            // console.log(props);
            return <Redirect to='/Dashboard' />
        }
        else{
            return <Redirect push to='/Login' />
        }
    }

    return(
        <div>
            <div style={{display:`${props.main.talent_setter.animat ? 'block' : 'none'}`}}>
                <Animation />
            </div>
            <div style={{display:`${!props.main.talent_setter.animat ? 'block' : 'none'}`}}>
                <Dash />
            </div>
        </div>
    )
}