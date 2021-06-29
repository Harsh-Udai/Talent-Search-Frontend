import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import imageVideo from '../Assets/abstract-vr.png';
import './Video.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip';
import Backdrop from '../Components/Backdrop';
import {Redirect} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));


function Media(props) {
  
  const classes = useStyles();

  const [likes,setLikes] = useState(props.data.likes);

  const [count,setcount] = useState(0);

  const [sum,setSum] = useState(likes);
  
  

  const valueCounter = ()=>{
    
    if(count===0){
      
      setcount(count+1);
      props.ch(true)
      axios.post('http://localhost:5000/VideosLikes',{
        id: props.data.id,
        status: 'increment',
        email:props.logUser
      },{
        headers:{
          'Authorization': `Bearer ${props.Token}`
        }
      })
      .then((data)=>{
        
        setSum(data.data.likes)
        props.ch(false)
      })
      .catch((e)=>{
        console.log(e);
      })


    }
    else{
      setcount(count-1);
      props.ch(true);
      axios.post('http://localhost:5000/VideosLikes',{
        id: props.data.id,
        status: 'decrement',
        email:props.logUser
      },{
        headers:{
          'Authorization': `Bearer ${props.Token}`
        }
      })
      .then((data)=>{
        
        setSum(data.data.likes)
        props.ch(false);

      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }
  

  return (
    <Grid container wrap="wrap">
      
        <Box  width={310} marginRight={3.5} my={5}>
          
        <Link style={{textDecoration:'none',color:'black'}} to={{ pathname: '/Dashboard/Videos/Play', query: { id:props.data.id,URL: props.data.URL}} }><CardMedia
              className={classes.media}
              image={props.data.URL_Image}
              title={props.data.ContentLabel}
            /></Link>
                    
            <Box pr={2}>
              <Typography style={{marginTop:'10px'}} gutterBottom variant="body2">
                <span style={{fontSize:'120%'}} className="font1"><Link style={{textDecoration:'none',color:'black'}} to={{ pathname: '/video', query: { URL: props.data.URL}} }>{props.data.ContentLabel}</Link></span>
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
              <span style={{fontSize:'120%'}} className="font1">@{props.data.owner}</span>
              </Typography>
              
            </Box>

            <div style={{marginTop:'10px'}}>
              <Chip style={{marginRight:'10px'}} label={<span className="font1">{'Views '+props.data.views}</span>} />
              
              <Chip label={<span className="font1">{'Likes '+sum}</span>} />
              <Button onClick={valueCounter} color="primary"><ThumbUpAltIcon style={{ color: '#616A6B' }}  /></Button>
            </div>
          
        </Box>
    
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube(props) {

  
  const [prog,setProg] = useState(false);
  const [video,setVideo] = useState([]);
  const [start,setStart] = useState(false);
  const starBack = (val)=>{
   
    setStart(val)
  }
  useEffect(()=>{
    setProg(true);
    axios.get('http://localhost:5000/Videos',{
      headers:{
        'Authorization': `Bearer ${props.main.talent_setter.Token}`
      }
    })
    .then((data)=>{
      
      setVideo(data.data);
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
    <div style={{backgroundColor:'#eeeeee'}}>
      <br></br>
      <br></br>
      <div className="DashVideo" >
          <div style={{textAlign:'center'}}>
            <img alt="." src={imageVideo}  width="50%" height="50%"></img>
          </div>
          <h1 className={'text'} style={{textAlign: 'center',marginTop:'20px',fontSize:'550%', color:'black'}} >Videos</h1>
      </div>
      <div style={{display: 'flex',justifyContent: 'center',flexWrap:'wrap'}}>
          
              <div style={{marginBottom:'100px',marginTop:'100px'}}>{prog ? <CircularProgress /> : null}</div>

              {video.length > 0 ?
                
                video.map((data,index)=>{
                  return <div key={index}><Media Token={props.main.talent_setter.Token} logUser={props.main.talent_setter.Email} ch={starBack} data={data} loading /></div>
                })

                : null
              }
      </div>

      <div>

      

      </div>
      <Backdrop start={start} />
    </div>
  );
}
