import React from 'react';
import DashAdd from './Dash_Add';

export default function Home(){
    return(
        <div>
            <h1 className={'text'} style={{textAlign: 'center',fontSize:'250%'}} >Home</h1>
            <DashAdd />
        </div>
    )
}