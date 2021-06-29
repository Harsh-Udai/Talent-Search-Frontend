import React,{useEffect} from 'react';
import ReactPlayer from 'react-player/file';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default function VideoPlay(props) {
    
    useEffect(()=>{

        if(props.location.query!==undefined){
            const updateViews = async()=>{
                await axios.post('http://localhost:5000/VideosViews',{
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
        <div style={{width:'100vw', height:'100vh',backgroundColor:'#343A40',display:'flex',justifyContent:'center'}}>
           <ReactPlayer style={{borderRadius:'10px'}}  controls={true} playing={true} width="100vw" height="100vh"  url={props.location.query.URL} />
      
        </div>
    )
}