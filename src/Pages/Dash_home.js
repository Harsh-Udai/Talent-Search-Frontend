import React from 'react';
import DashAdd from './Dash_Add';
import hgh from '../Assets/bermuda-message-sent.png'
import hg1 from '../Assets/dev3.png'
import hg2 from '../Assets/dev4.png';

export default function Home(props){
    

    return(
        <div >
            {/* <div style={{textAlign:'center'}}>
                <img alt="." src={HomeImage} width='40%' />
            </div> */}
            <div  className="headO" style={{textAlign:'center',paddingTop:'0px',borderRadius:'10px'}}>
                {/* <img alt="." src={hgh} width='25%' /> */}
            </div>
            <div  style={{textAlign:'center',marginTop:'-300px'}}>
                <p style={{fontSize:'400%'}} className="font1"><span style={{borderRadius:'10px',backgroundColor:'#FFAC41',color:'white',paddingLeft:'10px',paddingRight:'10px'}}>Welcome to Talent Search</span></p>
            </div>

            <div  style={{marginTop:'200px',borderRadius:'10px',backgroundColor:'#82E0AA',padding:'30px',display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                <img alt="." src={hgh} width='40%' />

                <p style={{fontSize:'400%'}} className="font1"> <span style={{color:'white'}}>Add your content by hovering over the plus.</span></p>

            </div>

            <div style={{marginTop:'40px',borderRadius:'10px',backgroundColor:'#85C1E9',padding:'30px',display:'flex',justifyContent:'center',flexWrap:'wrap'}} >
                <img alt="." src={hg1} width='20%' />

                <div style={{marginTop:'130px',marginLeft:'50px'}}>
                    <p style={{fontSize:'200%'}} className="font1"> <span style={{borderRadius:'10px',color:'white',backgroundColor:'#6495ED',paddingLeft:'10px',paddingRight:'10px'}}>View all the Videos from Video Section.</span></p>
                    <p style={{fontSize:'200%'}} className="font1"> <span style={{borderRadius:'10px',color:'white',backgroundColor:'#6495ED',paddingLeft:'10px',paddingRight:'10px'}}>View all the Images from Images Section.</span></p>
                    <p style={{fontSize:'200%'}} className="font1"> <span style={{borderRadius:'10px',color:'white',backgroundColor:'#6495ED',paddingLeft:'10px',paddingRight:'10px'}}>View all the Scripts from Scripts Section.</span></p>
                </div>

                

            </div>

            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                <img alt="." src={hg2} width='40%' />
                <div style={{marginTop:'200px',marginLeft:'50px'}}>
                    <p style={{fontSize:'400%'}} className="font1"><span style={{borderRadius:'10px',color:'white',backgroundColor:'#DE3163',paddingLeft:'10px',paddingRight:'10px'}}>Start Exploring</span></p>
                </div>
                {/* <svg style={{marginTop:'-150px'}} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0693e388"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 150.17857142857144,126 300.3571428571429,119 422,112 C 543.6428571428571,105 636.7500000000001,98 731,112 C 825.2499999999999,126 920.6428571428571,161 1039,168 C 1157.357142857143,175 1298.6785714285716,154 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#0693e3ff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 104.39285714285714,250.75 208.78571428571428,235.5 318,239 C 427.2142857142857,242.5 541.25,264.75 658,269 C 774.75,273.25 894.2142857142858,259.5 1025,256 C 1155.7857142857142,252.49999999999997 1297.892857142857,259.25 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
             */}
            </div>
            
                

            <DashAdd toggleCh={props.toggleCh} />
        </div>
    )
}