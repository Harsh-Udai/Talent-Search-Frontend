import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import ImageScr from '../Assets/bermuda-778.png';
import axios from 'axios';
import CardS from '../Containers/CardContainer';
import {Redirect} from 'react-router-dom';
import Backdrop from '../Components/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    width:354,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));



export default function Facebook(props) {
  
  const [prog,setProg] = useState(false);

  const [pdf,setPdf] = useState([]);
  const [start,setStart] = useState(false);
  const starBack = (val)=>{
    
    setStart(val)
  }

  useEffect(()=>{
    setProg(true);
    axios.get('https://talentsearchio.herokuapp.com/Scripts',{
      headers:{
        'Authorization': `Bearer ${props.main.talent_setter.Token}`
      }
    })
    .then((data)=>{
      // console.log(data.data)
      setPdf(data.data);
      setProg(false);
    })
    .catch((e)=>{
      console.log(e);
    })

  },[])

  if(props.main.talent_setter.Email===''){
    return <Redirect to="/Dashboard" />
  }


  return (
    <div style={{backgroundColor:'white'}}>
        <div style={{textAlign:'center'}}>
          <img alt="." src={ImageScr} width="50%" />
        </div>
        <h1 className={'text'} style={{textAlign: 'center',fontSize:'450%'}} >Scripts</h1>
        <div style={{display: 'flex',justifyContent: 'center',flexWrap:'wrap',marginBottom:'50px'}}>
        
       
        
        {/* <a target="_blank" href={url}>Senddd</a> */}
        <div style={{marginBottom:'100px',marginTop:'100px'}}>{prog ? <CircularProgress /> : null}</div>
      
        {
          pdf.length>0 ? 

          pdf.map((data,index)=>{
            return <div style={{margin:'10px'}} key={index}> <CardS danger="false" Token={props.main.talent_setter.Token} ch={starBack} likes={data.likes} id={data.id} URL={data.URL} email1={data.email} email={data.owner} label={data.ContentLabel} desc={data.ContentDescription} /> </div>
          })

          :null

        }
        

      </div>
      
      <Backdrop start={start} />

    </div>
  );
}
