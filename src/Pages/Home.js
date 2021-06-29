import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <>
            <div className="HomeB">
                <div className="overlay">

                    <div className="textHomeB">
                        <h1 style={{fontSize:'700%'}}>Talent Search</h1>
                        <p style={{fontSize:'300%',marginTop:'-90px'}}>Create your content,<br></br> explore others content,<br></br> Engage with the new world</p>
                    </div>
                </div>

                

            </div>
            <div className="sect-2H">
                <div style={{display:'flex',justifyContent:'center'}}> 
                    <h1 style={{fontSize:'700%',color:'white'}}>Things to do</h1>
                </div>
                
                <div  style={{textAlign:'center',marginTop:'30px'}}>
                    <Link to="/Signup" style={{textDecoration:'none'}} ><button className="buttonH font1">Signup</button></Link>
                    <br></br>
                    <Link to="/Login" style={{textDecoration:'none'}} ><button className="buttonH bCH font1">Signin</button></Link>
                </div>
            </div>

            <div className="HomeB1">
                <div className="overlay1">
                    <div className="textHomeB1">
                        <h1 style={{fontSize:'700%'}}>Formats Available</h1>
                        <p style={{fontSize:'300%',marginTop:'-60px'}}>Images,<br></br> Videos,<br></br> & Handwritten Scripts :)</p>
                    </div>
                    
                </div>

                

            </div>
            
        </>
    )
}