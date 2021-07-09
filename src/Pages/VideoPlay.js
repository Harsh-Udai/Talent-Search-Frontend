import React,{useEffect} from 'react';
import ReactPlayer from 'react-player/file';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default function VideoPlay(props) {

   
    
    useEffect(()=>{

        if(props.location.query!==undefined){
            const updateViews = async()=>{
                await axios.post('https://talentsearchio.herokuapp.com/VideosViews',{
                    id: props.location.query.id,
                    email: props.main.talent_setter.Email
                },{
                    headers:{
                        'Authorization': `Bearer ${props.main.talent_setter.Token}`
                      }
                })
                
            }
    
            updateViews();
        }
        

    },[])

    if(props.main.talent_setter.Email===''){
        return <Redirect to="/Dashboard" />
    }

    return(
        <div style={{width:'100%',height:'100vh',backgroundColor:'#ffffff'}}>
            <div style={{ marginBottom:'80px',display:'flex',justifyContent:'center'}}>
                <ReactPlayer style={{marginTop:'40px',borderRadius:'10px'}}  controls={true} playing={true} width="85vw" height="80vh"  url={props.location.query.URL} />
            </div>
            <div style={{display:'flex',backgroundColor:'#ffffff',justifyContent:'center'}}>
                <h1 className="font1" style={{fontSize:'250%'}}><span style={{backgroundColor:'#82E0AA',color:'white',paddingLeft:'10px',paddingRight:'10px',borderRadius:'3px',paddingTop:'6px',paddingBottom:'6px'}}>{props.location.query.name}</span></h1>
                
            </div>
            <div style={{display:'flex',justifyContent:'center',backgroundColor:'#ffffff',}}>
                <div style={{width:'700px'}}>
                    <h5 className="font1" style={{fontSize:'180%',textAlign:'center',backgroundColor:'#FFC074',color:'white',paddingLeft:'10px',paddingRight:'10px',borderRadius:'8px',paddingTop:'10px',paddingBottom:'10px'}}>{props.location.query.desc}</h5>
                </div>
                
            </div>
        </div>
        
    )
}