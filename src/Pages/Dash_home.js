import React from 'react';
import DashAdd from './Dash_Add';
import hgh from '../Assets/bermuda-message-sent.png'
import hg1 from '../Assets/dev3.png'
import hg2 from '../Assets/dev4.png';

export default function Home(props){
    

    return(
        <div >
            
            <div  className="headO" style={{textAlign:'center',paddingTop:'0px',borderRadius:'10px'}}>
               
            </div>
            <div className="dashFT" style={{textAlign:'center',marginTop:'-300px'}}>
                <p  style={{fontSize:'400%'}} className="font1"><span style={{borderRadius:'10px',backgroundColor:'#FFAC41',color:'white',paddingLeft:'10px',paddingRight:'10px'}}>Welcome to Talent Search</span></p>
            </div>

            <div  style={{marginTop:'200px',borderRadius:'10px',backgroundColor:'#82E0AA',padding:'30px',display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                <img className="dashIm" alt="." src={hgh} width='40%' />

                <p style={{fontSize:'400%'}} className="font1"> <span style={{color:'white'}}>Add your content by hovering over the plus.</span></p>

            </div>

            <div style={{marginTop:'40px',borderRadius:'10px',backgroundColor:'#85C1E9',padding:'30px',display:'flex',justifyContent:'center',flexWrap:'wrap'}} >
                <img className="dashIm1" alt="." src={hg1} width='20%' />

                <div style={{marginTop:'130px',marginLeft:'50px'}}>
                    <p style={{fontSize:'200%'}} className="font1"> <span style={{borderRadius:'10px',color:'white',backgroundColor:'#6495ED',paddingLeft:'10px',paddingRight:'10px'}}>View all the Videos from Video Section.</span></p>
                    <p style={{fontSize:'200%'}} className="font1"> <span style={{borderRadius:'10px',color:'white',backgroundColor:'#6495ED',paddingLeft:'10px',paddingRight:'10px'}}>View all the Images from Images Section.</span></p>
                    <p style={{fontSize:'200%'}} className="font1"> <span style={{borderRadius:'10px',color:'white',backgroundColor:'#6495ED',paddingLeft:'10px',paddingRight:'10px'}}>View all the Scripts from Scripts Section.</span></p>
                </div>

                

            </div>

            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                <img className="dashIm2" alt="." src={hg2} width='40%' />
                <div className="dashFT" style={{marginTop:'200px',marginLeft:'50px'}}>
                    <p style={{fontSize:'400%'}} className="font1"><span style={{borderRadius:'10px',color:'white',backgroundColor:'#DE3163',paddingLeft:'10px',paddingRight:'10px'}}>Start Exploring</span></p>
                </div>
                
            </div>
            
                

            <DashAdd toggleCh={props.toggleCh} />
        </div>
    )
}