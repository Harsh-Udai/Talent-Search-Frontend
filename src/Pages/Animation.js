import React from 'react';
import './Animate.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Aimation() {
    return(
        <div className="Anime">

            <div  style={{position:'fixed',top:'40%',left:'50%',transform:'translate(-50%,-50%)'}}>
                <div >
                    <p style={{fontSize:'400%',marginBottom:'-20px',color:'white'}}><span className="split-2 font1"><span style={{color:"#7DCEA0"}}>T</span>alent <span style={{color:'#F5B041'}}>S</span>earch </span><br></br> </p>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
                    <CircularProgress  style={{color:'#ffbd69'}} />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}